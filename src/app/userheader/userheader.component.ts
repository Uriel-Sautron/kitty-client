import { Component, OnInit } from '@angular/core';
import { Tracing } from 'trace_events';
import { InlineUser } from '../model/InlineUser';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.scss'],
})
export class UserheaderComponent implements OnInit {
  me: InlineUser = new InlineUser(sessionStorage.getItem('username'));

  constructor() {}

  ngOnInit(): void {}
}
