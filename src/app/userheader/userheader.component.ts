import { Component, OnInit } from '@angular/core';
import { InlineUser } from '../model/InlineUser';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.scss'],
})
export class UserheaderComponent implements OnInit {
  me: InlineUser = new InlineUser('yoh');

  constructor() {}

  ngOnInit(): void {}
}
