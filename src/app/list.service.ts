import { Injectable } from '@angular/core';
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
    } else {
      if(!this.localStorage['visited']) {
        let today = new Date();
        this.addUpdateListItem(
          new ListItem({
            'title': 'I\'m old task',
            'description': 'You can delete me!',
            'added_date': new Date(today.getDate() - 1).setHours(12, 15, 12, 12),
            'completion_date': new Date(today.getDate() - 1).setHours(14, 15, 12, 12),
            'completed': true
          })
        );

        this.addUpdateListItem(
          new ListItem({
            'title': 'Match old task finished',
            'description': 'Hover me and click tick icon to match me as finished.',
            'added_date': new Date(today.getDate() - 1).setHours(17, 25, 12, 12),
          })
        );

        this.addUpdateListItem(
          new ListItem({
            'title': 'Check out icons on left',
            'description': 'You\'ll learn more about this app there',
            'added_date': new Date().setHours(11, 22, 12, 12),
          })
        );

        this.localStorage['visited'] = true;
      }
    }
  }

  saveToLocalstorage() {
    this.localStorage['list'] = JSON.stringify(this.listItems);
  }

  addUpdateListItem(listItem: ListItem): ListService {
    if(!listItem.id) {
      listItem.id = ++this.lastId;
      listItem.order = this.lastId;
      this.listItems.push(listItem);  
    } else {
      this.updateById(listItem.id, listItem);
    }

    this.saveToLocalstorage();

    return this;
  }

  deleteItem(listItem: ListItem): ListService {
    this.listItems = this.listItems.filter(el => el.id != listItem.id);

    this.saveToLocalstorage();

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
 
    this.saveToLocalstorage();

    return listItem;
  }

  toggleCompleted(listItem: ListItem) {
    return this.updateById(listItem.id, {completed: !listItem.completed, completion_date: new Date()});
  }

  toggleDeleted(listItem: ListItem) {
    return this.updateById(listItem.id, {deleted: !listItem.deleted});
  }

  getOrderedByDate() {
    return this.listItems.sort((x, y) => {
        if(x.added_date < y.added_date) {
          return -1;
        } else if (x.added_date > y.added_date) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  getPreviousDate(date: Date) {
    let firstPrevious = this.getOrderedByDate() 
      .filter(
        item => !item.deleted && 
        item.completed && 
        new Date(item.completion_date).setHours(0, 0, 0, 0) < new Date(date).setHours(0, 0, 0, 0)
      ).pop();
    return firstPrevious ? new Date(firstPrevious.added_date) : false;    
  }

  getNextDate(date: Date) {
    let firstNext = this.getOrderedByDate()
      .filter(
        item => !item.deleted && 
        item.completed &&
        new Date(item.completion_date).setHours(0, 0, 0, 0) > new Date(date).setHours(0, 0, 0, 0)
      ).shift();
    return firstNext ? new Date(firstNext.added_date) : false;    
  }
}
