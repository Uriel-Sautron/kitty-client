import { Observable } from 'rxjs';
import { Message } from '../model/Message';
export class SocketMessageService {
  private url = 'http://localhost:8085';
  private socket;

  constructor() {
    this.socket = require('socket.io-client')(this.url);
  }

  public socketState() {
    this.socket.on('connect', () => {
      console.log(this.socket.connected);
    });
    this.socket.on('disconnect', () => {
      console.log(this.socket.connected);
    });
    this.socket.on('connect_error', (error: { name: any }) => {
      console.log(error.name);
    });
  }

  public newSocketMessage(message: Message) {
    this.socket.emit('chatevent', message);
  }

  public getSocketMessage = () => {
    return new Observable((observer) => {
      this.socket.on('chatevent', (message: Message) => {
        observer.next(message);
      });
    });
  };
}
