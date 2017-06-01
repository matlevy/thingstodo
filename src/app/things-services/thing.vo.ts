import * as firebase from 'firebase/app';

export interface IThingVO {
    timestamp:object;
    title:string;
    subtitle:string;
    body:string;
    reset():void;
}

export interface IUpdateable {
    setSource(source:object):void;
    source:object;
}

export function ThingVOFromObject(source:object) {
    
}

export class ThingVO implements IThingVO, IUpdateable {
    
    timestamp:object;
    public source:object;

    constructor(public title:string='', public subtitle:string='', public body:string='') {
        this.timestamp=firebase.database.ServerValue.TIMESTAMP;
    }

    public setSource( source:any ):void{
        this.title = source.title;
        this.subtitle = source.subtitle;
        this.body = source.body;
        this.source = source;
    }

    public reset():void {
        this.title = '';
        this.subtitle = '';
        this.body = '';
    }
    
}
