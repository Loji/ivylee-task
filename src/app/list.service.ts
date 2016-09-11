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
    } 
  }

  addListItem(listItem: ListItem): ListService {
    if(!listItem.id) {
      listItem.id = ++this.lastId;
    }
    this.listItems.push(listItem);

    this.localStorage['list'] = JSON.stringify(this.listItems);

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

  

  getAllListItems(): ListItem[] {
    return this.listItems;
  }

}

export const LOCAL_STORAGE_PROVIDERS:any[] = [
    provide(ListService, {useClass: ListService})
];