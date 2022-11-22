import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token: string | null = sessionStorage.getItem('token');
    console.log(token);
    this.http
      .get('http://localhost:8080/api/user', {
        headers: new HttpHeaders({
          'Acces-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          withCredentials: 'true',
          Authorization: `Basic ${token}`,
        }),
      })
      .subscribe((Response) => console.log(Response));
  }
}
