import { Component, OnInit } from '@angular/core';
import { InlineUser } from '../model/InlineUser';
import { Message } from '../model/Message';
import { Observable, Subscription } from 'rxjs';
import { SocketMessageService } from '../service/socket-message.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent implements OnInit {
  // message: Message = new Message('', '');

  // message1: Message = new Message('coucou', 'roderick');
  // message2: Message = new Message('ça va?', 'roger');
  // message3: Message = new Message('bien et vous?', 'robert');
  // message4: Message = new Message('tranquille', this.me.username);
  // message5: Message = new Message(
  //   '    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   this.me.username
  // );
  // message6: Message = new Message('eh beh...', 'roderick');

  // messageList: Message[] = [
  //   this.message1,
  //   this.message2,
  //   this.message3,
  //   this.message4,
  //   this.message5,
  //   this.message6,
  // ];

  me: InlineUser = new InlineUser(sessionStorage.getItem('username'));

  messages!: Observable<Message[]>;
  currentMessage: Message = { type: '', message: '', room: 1, author: '' };
  private socketMessageSub?: Subscription;

  constructor(private socketMessageService: SocketMessageService) {}

  newMessage(message: Message) {
    this.socketMessageService.newSocketMessage(message);
  }

  loadMessage() {
    this.socketMessageService.getSocketMessage();
  }

  minContent(content: string) {
    return content.length < 1;
  }

  ngOnInit(): void {
    this.messages = this.socketMessageService.socketMessage;
    this.socketMessageSub =
      this.socketMessageService.currentSocketMessage.subscribe(
        (message) => (this.currentMessage = message)
      );
    this.loadMessage();
  }
}
