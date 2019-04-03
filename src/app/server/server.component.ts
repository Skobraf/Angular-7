import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 'hello world';
    serverStatus = 400;
    getServerStatus() {
        return this.serverStatus;
    }
}