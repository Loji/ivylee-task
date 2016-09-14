import { Component, OnInit, Pipe, transition, animate, style, state, trigger } from '@angular/core';
import { ListItem } from '../list-item';
import { ListService } from '../list.service';
import { OrderBy } from './order-by.pipe';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd';


@Component({
  moduleId: module.id,
  selector: 'list-app',
  templateUrl: 'list-app.component.html',
  styleUrls: ['list-app.component.css'],
  directives: [DND_DIRECTIVES],
  providers: [ListService, DND_PROVIDERS],
  pipes: [OrderBy],
  // animations: [
  //   trigger('addListItem', [
  //     state('added', style({ 
  //       // transform: 'translateY(0)',
  //       opacity: 1
  //     })),
  //     transition('void => *', [
  //       style({
  //         // transform: 'translateY(-100%)',
  //         opacity: 0,
  //       }),
  //       animate('250ms ease')
  //     ]),
  //     transition('* => void', [
  //       style({
  //         // transform: 'translateY(-100%)',
  //         opacity: 0,
  //       }),
  //       animate('250ms ease')
  //     ]),
  //   ])
  // ]
})

export class ListAppComponent implements OnInit {
  newListItem: ListItem = new ListItem();

  listItems: Array<ListItem> = [];

  constructor(private listService: ListService) { 
    // this.listService.listItems.subscribe(listItem => !listItem.deleted);
    this.listItems = this.listService.getAllListItems();

  }

  ngOnInit() {
    // this.listItems = this.listService.listItems$;
  }

  // get listItems() {
  //   return this.listService.getAllListItems().filter(listItem => !listItem.deleted);
  // }

  addListItem() {
    this.newListItem.added_date = new Date();
    this.newListItem.completed = false;
    this.listService.addListItem(this.newListItem);
    this.newListItem = new ListItem();
  }

  toggleListItemCompleted(listItem: ListItem) {
    this.listService.toggleCompleted(listItem);
  }

  toggleListItemDeleted(listItem: ListItem) {
    this.listService.toggleDeleted(listItem);
  }

  handleSort(listItem: ListItem) {
    console.log(listItem);
  }

}
