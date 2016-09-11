import { Component, OnInit, transition, animate, style, state, trigger } from '@angular/core';
import { ListItem } from '../list-item';
import { ListService } from '../list.service';


@Component({
  moduleId: module.id,
  selector: 'list-app',
  templateUrl: 'list-app.component.html',
  styleUrls: ['list-app.component.css'],
  providers: [ListService],
  animations: [
    trigger('addListItem', [
      state('added', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        }),
        animate('250ms ease')
      ]),
      transition('* => void', [
        style({
          transform: 'translateY(-100%)',
          opacity: 0,
        }),
        animate('250ms ease')
      ]),
    ])
  ]
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
    this.newListItem.added_date = new Date();
    this.listService.addListItem(this.newListItem);
    this.newListItem = new ListItem();
  }

}
