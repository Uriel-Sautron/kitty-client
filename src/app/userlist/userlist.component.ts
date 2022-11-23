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

  userList: InlineUser[] = [this.roger, this.robert, this.roderick];

  constructor() {}

  ngOnInit(): void {}
}
