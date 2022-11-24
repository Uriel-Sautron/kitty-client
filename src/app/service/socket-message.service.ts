import { Observable } from 'rxjs';
import { Message } from '../model/Message';
export class SocketMessageService {
  private url = 'https://kitty--server.herokuapp.com';
  private socket;

  constructor() {
    this.socket = require('socket.io-client')(this.url, {
      secure: true,
    });
  }

  public socketState() {
    this.socket.on('connect', () => {
      console.log('connect: ', this.socket.connected);
    });
    this.socket.on('disconnect', () => {
      console.log(this.socket.connected);
    });
    this.socket.on('connect_error', (error: { name: any }) => {
      console.log(error.name);
    });
    console.log(this.socket);
  }

  public isConnected(): boolean {
    return this.socket.connected;
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

  public newIsonline(name: String | null) {
    this.socket.emit('online', name);
  }

  public getIsOnline = () => {
    return new Observable((observer) => {
      this.socket.on('online', (name: string | null) => {
        observer.next(name);
      });
    });
  };
}
