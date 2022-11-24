import { Component, OnInit } from '@angular/core';
import { InlineUser } from '../model/InlineUser';
import { Message } from '../model/Message';
import { SocketMessageService } from '../service/socket-message.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent implements OnInit {
  me: InlineUser = new InlineUser(sessionStorage.getItem('username'));
  messages: Message[] = [];
  currentMessage: Message = { message: '', author: this.me.username };

  constructor(private socketMessageService: SocketMessageService) {}

  minContent(content: string): boolean {
    return content.length < 1;
  }

  sendMessage() {
    console.log('current message: ', this.currentMessage);
    this.socketMessageService.newSocketMessage(this.currentMessage);
    this.currentMessage = { message: '', author: '' };
  }

  ngOnInit() {
    this.socketMessageService.socketState();
    this.socketMessageService.getSocketMessage().subscribe((data: any) => {
      console.log('data: ', data);
      this.messages.push(data);
    });
  }
}
