import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InlineUser } from '../model/InlineUser';
import { SocketMessageService } from '../service/socket-message.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  me: InlineUser = new InlineUser(sessionStorage.getItem('username'));
  name: string | null = this.me.username;
  userList: InlineUser[] = [];
  connectedUserList: String[] = [];
  connected: boolean = this.socketMessageService.isConnected();

  constructor(
    private http: HttpClient,
    private socketMessageService: SocketMessageService
  ) {}

  ngOnInit(): void {
    console.log('connected: ', this.connected);
    const token: string | null = sessionStorage.getItem('token');
    this.http
      .get('https://kitty--server.herokuapp.com/api/users', {
        headers: new HttpHeaders({
          'Acces-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          withCredentials: 'true',
          Authorization: `Basic ${token}`,
        }),
      })
      .subscribe((Response) => (this.userList = Response as InlineUser[]));

    this.socketMessageService.newIsonline(this.name);

    this.socketMessageService.getIsOnline().subscribe((data: any) => {
      console.log('username: ', data);
      this.connectedUserList.push(data);
    });
  }
}
