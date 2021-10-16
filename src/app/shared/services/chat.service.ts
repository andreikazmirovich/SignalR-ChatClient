import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { UserLogin } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatConnection: HubConnection;

  public joinRoom(loginData: UserLogin): void {
    const connection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/chat')
      .configureLogging(LogLevel.Information)
      .build();

    connection.on('ReceiveMessage', (user: string, message: string) => {
      console.log(`Message received: ${message}`);
    });

    connection.start().then(() => connection.invoke('JoinRoom', loginData));

    this.chatConnection = connection;
  }

}
