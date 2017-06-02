import { Injectable } from '@angular/core';

export namespace history {

  interface IDoable {
    name:string;
    setDo(action:Promise<any>):IDoable;
    do():IUndoable;
  }

  interface IUndoable extends IDoable {
    setUndo(action:Promise<any>):void;
    undo():IDoable;
  }

  interface IRedoable extends IUndoable {
    redo():IUndoable;
  }

  export class BaseHistoricalAction implements IRedoable {

    private _doAction:Promise<any>;
    private _undoAction:Promise<any>;

    constructor( public name:string ){ }
    
    public setDo(action:Promise<any>):IDoable {
      this._doAction = action;
      return this;
    };
    
    public do():IUndoable {
      return this;
    };

    public setUndo(action:Promise<any>):IUndoable {
      this._undoAction=action;
      return this;
    };
    
    public undo():IDoable {
      return this;
    };

    public redo():IUndoable {
      return this.do();
    }
  }

  @Injectable()
  export class HistoryService {

    _actions:Array<IUndoable>;

    constructor() { }

    public storeAction(task:Promise<any>,name:string='',undo:Promise<any>=null):IDoable {
      let action:IUndoable = new BaseHistoricalAction(name);
      action.setDo(task);
      action.setUndo(undo);
      return action as IDoable;
    }

    public undoLastAction():IDoable {
      return this._actions.pop().undo();
    }
  }
}