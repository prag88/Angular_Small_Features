import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "no server was created"
  serverName='Testserver';
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  
  }
  onCreateServer(){
    this.serverCreationStatus = "Server was created!";
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
