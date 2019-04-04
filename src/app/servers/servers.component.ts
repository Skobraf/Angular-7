import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  nameServer = 'server';
  nameServers = ['server1', 'server2'];

  constructor() { 
  }

  ngOnInit() {
  }
  const handleClick = () => {
    this.nameServers.push(this.nameServer);
  }


}
