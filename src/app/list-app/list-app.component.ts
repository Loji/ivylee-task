import { Component, OnInit } from '@angular/core';
import { ListItem } from '../list-item';
import { ListService } from '../list.service';


@Component({
  moduleId: module.id,
  selector: 'list-app',
  templateUrl: 'list-app.component.html',
  styleUrls: ['list-app.component.css'],
  providers: [ListService]
})
export class ListAppComponent implements OnInit {
 
  newListItem: ListItem = new ListItem();

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  get listItems() {
    return this.listService.getAllListItems();
  }

  addListItem() {
    this.listService.addListItem(this.newListItem);
    this.newListItem = new ListItem();
  }

}
