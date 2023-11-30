import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white;
  }`]
})
export class ServerComponent {
  serverID = 10;
  serverstatus = 'offline';
  constructor(){
    this.serverstatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus (){
    return this.serverstatus;
  }
  getColor(){
    return this.serverstatus == 'online' ? 'green' : 'red';
  }
}
