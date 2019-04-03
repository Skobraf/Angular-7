import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  targetElement = ''
  isEnable = false;
  constructor() { 
    setTimeout(() => (this.isEnable = true), 2000);
  }

  ngOnInit() {
  }
  handleClick() {
    console.log('hello');
  }
  handleEvent(event) {
    this.targetElement = event.target.value;
  }
}
