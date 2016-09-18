import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-deleted-items',
  templateUrl: './deleted-items.component.html',
  styleUrls: ['./deleted-items.component.scss'], 
  providers: [ListService],
})
export class DeletedItemsComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
  }


  get deletedListItems() {
    return this.listService.getAllListItems()
      .sort((x, y) => {
        if(x.order > y.order) {
          return -1;
        } else if (x.order < y.order) {
          return 1;
        } else {
          return 0;
        }
      }) 
      .filter(listItem => listItem.deleted);
  }

  restoreItem(listItem: ListItem) {
    this.listService.toggleDeleted(listItem);
  }

  trashItem(listItem: ListItem) {
    this.listService.deleteItem(listItem);
  }
}
