import { Injectable, provide } from '@angular/core';
import { ListItem } from './list-item';

@Injectable()
export class ListService {

  lastId: number = 0; 

  listItems: ListItem[] = [];

  public localStorage: any;

  constructor() { 
    this.localStorage = localStorage;
    if(this.localStorage['list']) {
      this.listItems = JSON.parse(this.localStorage['list']);
      this.lastId = this.getLastId();
    } 
  }

  saveToLocalstorage() {
    this.localStorage['list'] = JSON.stringify(this.listItems);
  }

  addListItem(listItem: ListItem): ListService {
    if(!listItem.id) {
      listItem.id = ++this.lastId;
    }
    if(!listItem.order) {
      listItem.order = this.lastId;
    }
    this.listItems.push(listItem);

    this.saveToLocalstorage();

    return this;
  }

  deleteItem(listItem: ListItem): ListService {
    if(listItem.deleted) {
      this.listItems = this.listItems.filter(el => el.id != listItem.id);
    } else {
      listItem.deleted = true;
    } 

    return this;
  }

  getLastId(): number {
    if(this.listItems.length === 0) {
      return 0;
    }
    return this.listItems.reduce(function(a, b){ return a.id > a.id ? a : b }).id;
  }

  getAllListItems(): ListItem[] {
    return this.listItems; 
  }

  getById(id: number): ListItem {
    return this.listItems.filter(item => item.id === id).pop();
  }

  updateById(id: number, values: Object = {}): ListItem {
    let listItem = this.getById(id);
    if(!listItem) {
      return null;
    }
    Object.assign(listItem, values);
 
    return listItem;
  }

  toggleCompleted(listItem: ListItem) {
    return this.updateById(listItem.id, {completed: !listItem.completed});
  }

}

export const LOCAL_STORAGE_PROVIDERS:any[] = [
    provide(ListService, {useClass: ListService})
];