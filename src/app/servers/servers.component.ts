import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  targetElement = 'hello';
  isEnable = false;
  constructor() { 
  }

  ngOnInit() {
  }
  handleClick() {
    this.isEnable = true;
  }
  handleEvent(event) {
    this.targetElement = event.target.value;
  }
}
