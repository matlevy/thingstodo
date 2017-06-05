import { TestBed, inject } from '@angular/core/testing';

import * as core from './history.service';

describe('HistoryService', () => {
  let testVal:number;
  let oldVal:number;
  
  const doAction:core.history.Runnable = new core.history.Runnable(()=>{
    oldVal=testVal;
    testVal=testVal+1;
    return testVal;
  });

  const undoAction:core.history.Runnable = new core.history.Runnable(()=>{
    testVal=oldVal;
    return testVal;
  });

  beforeEach(() => {
    testVal=0;
    TestBed.configureTestingModule({
      providers: [core.history.HistoryService]
    });
  });

  it('should be created', inject([core.history.HistoryService], (service: core.history.HistoryService) => {
    expect(service).toBeTruthy();
  }));

  it('should increment the counter correctly', inject([core.history.HistoryService], (service: core.history.HistoryService) => {
    service.storeAction(doAction,'first',undoAction);
    service.storeAction(doAction,'first',undoAction);
    service.storeAction(doAction,'first',undoAction);
    service.storeAction(doAction,'first',undoAction);
    expect(service.length).toBe(4);
    service.undoPreviousAction();
    service.undoPreviousAction();
    service.undoPreviousAction();
    service.undoPreviousAction();
    expect(service.length).toBe(0);
  }));

  it('should perform the do action, increment the counter and undo the done action', inject([core.history.HistoryService], (service: core.history.HistoryService) => {
    service.storeAction(doAction,'first',undoAction).do();
    expect(testVal).toBe(1);
    expect(service.length).toBe(1);
    service.undoPreviousAction();
    expect(testVal).toBe(0);
    expect(service.length).toBe(0);
  }));
});


describe('Runnable', () => {
  it('should create an instance of the class',()=>{
    expect(new core.history.Runnable(()=>{}) instanceof core.history.Runnable).toBeTruthy();
  });
  it('should execute the run command correctly', () => {
    const runner:core.history.Runnable = new core.history.Runnable(()=>{ return true });
    expect(runner.run()).toBeTruthy(); 
  });    
});

describe('BaseHistoricalAction', () => {
  let testVal:string;
  let oldVal:string;
  let action:core.history.BaseHistoricalAction;
  
  const doAction:core.history.Runnable = new core.history.Runnable(()=>{
    oldVal=testVal;
    testVal="done";
    return "doAction";
  });

  const undoAction:core.history.Runnable = new core.history.Runnable(()=>{
    testVal=oldVal;
    return "undoAction";
  });

  beforeEach(()=>{
    testVal="default";
    action = new core.history.BaseHistoricalAction('testAction');
  });
  it('should store the name of the action correctly', () => {
    expect(action.name).toBe('testAction');
  });    
  it('should exectute the do runner correctly',()=>{
    action.setDo(doAction);
    action.do();
    expect(testVal).toBe("done");
  });
  it('should execute the undo action correctly',()=>{
    action.setDo(doAction);
    action.setUndo(undoAction);
    action.do();
    expect(testVal).toBe("done");
    action.undo();
    expect(testVal).toBe("default");
  });
  it('should return the correct values from the doAction',()=>{
    action.setDo(doAction);
    expect(action.do()).toBe('doAction');
  });
  it('should return the correct value for the undo action',()=>{
    action.setUndo(undoAction);
    expect(action.undo()).toBe('undoAction');
  })
});
  
  