import { Component, OnInit } from '@angular/core';
import { UserLogin } from './shared/models/user-login.model';
import { ChatService } from './shared/services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public title: string = 'ChatClient';
  public showLoginDialog: boolean = true;

  constructor(private chatService: ChatService) { }

  public onJoinRoom(loginData: UserLogin): void {
    this.chatService.joinRoom(loginData);
    this.showLoginDialog = false;
  }
}
