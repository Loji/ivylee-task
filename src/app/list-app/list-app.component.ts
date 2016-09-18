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
  currentDate: Date;
 
  previousDate: any; 
  nextDate: any;


  constructor(private listService: ListService, private route: ActivatedRoute, private router: Router) {     
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       this.year = parseInt(params['year']);
       this.month = parseInt(params['month']);
       this.day = parseInt(params['day']);
       if(!Number.isNaN(this.day)) {
        this.currentDate = new Date(this.year, this.month - 1, this.day);
       }
       this.previousDate = this.listService.getPreviousDate(this.currentDate);
       this.nextDate = this.listService.getNextDate(this.currentDate);

       // hotfix for listing next date when there is no next date
       if(!Number.isNaN(this.day) && 
       !this.nextDate && 
       new Date(this.currentDate).setHours(0, 0, 0 ,0) !== new Date().setHours(0, 0, 0 ,0)) {
         this.nextDate = new Date();
       }
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
      .filter(listItem => {
        if(Number.isNaN(this.day) || new Date(this.currentDate).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
          return !listItem.deleted && (
            new Date(listItem.completion_date).setHours(0, 0, 0, 0) === new Date(this.currentDate).setHours(0, 0, 0, 0) ||
            !listItem.completed);
        } else {
          return !listItem.deleted && (
            new Date(listItem.completion_date).setHours(0, 0, 0, 0) === new Date(this.currentDate).setHours(0, 0, 0, 0));
        }

      });
  }

  modifyItem(listItem: ListItem) {
    this.newListItem = listItem;
  }

  addListItem() {
    this.newListItem.added_date = new Date();
    this.newListItem.completed = false;
    this.listService.addUpdateListItem(this.newListItem);
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
