import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  user: User = new User('', '', '');

  samePassword(password: string, passwordConfirm: string) {
    return password !== passwordConfirm;
  }

  minMaxUsername(username: string) {
    return username.length < 3 || username.length > 10;
  }

  onSubmit(): void {
    console.log(this.user);
  }

  ngOnInit(): void {}
}
