export class ListItem {
    id: number;
    title: string = '';
    description: string = '';
    complete: boolean = false;
    order: number;
    added_date: Date;
    completion_date: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
