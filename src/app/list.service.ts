import { Injectable } from '@angular/core';
import { ListItem } from './list-item';

@Injectable()
export class ListService {

  lastId: number = 0; 

  listItems: ListItem[] = [];

  constructor() { 

  }

  addListItem(listItem: ListItem): ListService {
    if(!listItem.id) {
      listItem.id = ++this.lastId;
    }
    this.listItems.push(listItem);

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
