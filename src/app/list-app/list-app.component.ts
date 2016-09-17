import { Component, OnInit, OnDestroy, Pipe, transition, animate, style, state, trigger } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ListItem } from '../list-item';
import { ListService } from '../list.service';


@Component({
  selector: 'list-app',
  templateUrl: 'list-app.component.html',
  styleUrls: ['list-app.component.scss'],
  providers: [ListService],
  // directives: [],
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

export class ListAppComponent implements OnInit, OnDestroy {
  newListItem: ListItem = new ListItem();
  // listItems: Array<ListItem> = [];

  year: number = null;
  month: number = null;
  day: number = null;

  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       this.year = parseInt(params['year']);
       this.month = parseInt(params['month']);
       this.day = parseInt(params['day']);
     });
  }

  ngOnDestroy() {
  }

  get listItems() {
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
      .filter(listItem => !listItem.deleted);
  }

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

  handleSort(event: any) {
    console.log(event);
  }

}
