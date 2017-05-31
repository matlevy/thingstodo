export class ThingVO {
    constructor(public title:string='', public subtitle:string='', public body:string='') {
    }
    reset():void {
        this.title = '';
        this.subtitle = '';
        this.body = '';
    }
}
