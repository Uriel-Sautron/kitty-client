import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from '../model/Message';
import { SocketMessage } from '../model/socket-message.model';

@Injectable({
  providedIn: 'root',
})
export class SocketMessageService {
  currentSocketMessage = this.socket.fromEvent<Message>('socketMessage');
  socketMessage = this.socket.fromEvent<Message[]>('socketMessage');

  constructor(private socket: Socket) {}

  // getSocketMessage() {
  //   this.socket.emit('getSocketMessage');
  // }

  // newSocketMessage(message: Message) {
  //   this.socket.emit('addSocketMessage', message);
  // }

  getSocketMessage() {
    this.socket.emit('get_message');
  }

  newSocketMessage(message: Message) {
    this.socket.emit('send_message', message);
  }
}
