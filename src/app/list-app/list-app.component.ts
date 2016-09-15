import { Component, OnInit, OnDestroy, Pipe, transition, animate, style, state, trigger } from '@angular/core';
import { ListItem } from '../list-item';
import { ListService } from '../list.service';
import { OrderBy } from './order-by.pipe';


@Component({
  selector: 'app-root',
  templateUrl: 'list-app.component.html',
  styleUrls: ['list-app.component.scss'],
  providers: [ListService],
  // pipes: [OrderBy],
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
  routesSub: any;
  // listItems: Array<ListItem> = [];

  private filter: Array<any> = [];

  constructor(private listService: ListService) { 
    // this.listService.listItems.subscribe(listItem => !listItem.deleted);
    // this.listItems = this.listService.getAllListItems();

  }

  ngOnInit() {
  //  this.routesSub = this.route.params.subscribe(params => {
  //     let year = parseInt(params['year']);
  //     // let month = parseInt(params['month']);
  //     // let day = parseInt(params['day']);

  //     console.log(year);
  //   });
  }

  ngOnDestroy() {
    this.routesSub.unsub();
  }

  get listItems() {
    return this.listService.getAllListItems().filter(listItem => !listItem.deleted);
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
