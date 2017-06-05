import { Injectable } from '@angular/core';

export namespace history {

  interface IRunable {
    run:any;
  }

  interface IDoable {
    name:string;
    setDo(action:IRunable):IDoable;
    do<T>():T;
  }

  interface IUndoable extends IDoable {
    setUndo(action:IRunable):IUndoable;
    undo<T>():T;
  }

  interface IRedoable extends IUndoable {
    redo():IUndoable;
  }

  export class Runnable implements IRunable {
    constructor(public run:Function){}
  }

  export class BaseHistoricalAction implements IUndoable {

    private _doAction:IRunable;
    private _undoAction:IRunable;

    constructor( public name:string ){ }
    
    public setDo(action:IRunable):IDoable {
      this._doAction = action;
      return this;
    };
    
    do<T>():T {
      return this._doAction.run();
    };

    public setUndo(action:IRunable):IUndoable {
      this._undoAction = action;
      return this;
    };
    
    undo<T>():T {
      return this._undoAction.run();
    };

  }

  @Injectable()
  export class HistoryService {

    _actions:Array<IUndoable>=[];

    constructor() { }

    public storeAction(run:IRunable,name:string='',undo:IRunable=null):BaseHistoricalAction {
      let action:IUndoable = new BaseHistoricalAction(name);
      action.setDo(run);
      action.setUndo(undo);
      this._actions.push(action);
      return action as BaseHistoricalAction;
    }

    public undoPreviousAction(){
      return this._actions.pop().undo();
    }

    public get length():number {
      return this._actions.length;
    }

  }
}