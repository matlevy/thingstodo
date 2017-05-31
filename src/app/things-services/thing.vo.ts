import * as firebase from 'firebase/app';

export class ThingVO {
    timestamp:object;

    constructor(public title:string='', public subtitle:string='', public body:string='') {
        this.timestamp=firebase.database.ServerValue.TIMESTAMP;
    }
    reset():void {
        this.title = '';
        this.subtitle = '';
        this.body = '';
    }
}
