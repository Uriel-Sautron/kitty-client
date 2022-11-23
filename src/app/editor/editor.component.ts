import { Component, OnInit } from '@angular/core';
import { Message } from '../model/Message';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  message: Message = new Message('', '');

  constructor() {}

  minContent(content: string) {
    return content.length < 1;
  }

  onSubmit() {}

  ngOnInit(): void {}
}
