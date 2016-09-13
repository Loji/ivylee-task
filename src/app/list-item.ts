export class ListItem {
    id: number;
    title: string = '';
    description: string = '';
    completed: boolean = false;
    deleted: boolean = false;    
    order: number;
    added_date: Date;
    completion_date: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
