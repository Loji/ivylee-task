import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  infoVisible: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

}
