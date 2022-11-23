import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InlineUser } from '../model/InlineUser';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent implements OnInit {
  roger: InlineUser = new InlineUser('roger');
  robert: InlineUser = new InlineUser('robert');
  roderick: InlineUser = new InlineUser('roderick');

  userList: InlineUser[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token: string | null = sessionStorage.getItem('token');
    console.log(token);
    this.http
      .get('http://localhost:8080/api/users', {
        headers: new HttpHeaders({
          'Acces-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          withCredentials: 'true',
          Authorization: `Basic ${token}`,
        }),
      })
      .subscribe((Response) => (this.userList = Response as InlineUser[]));
  }
}
