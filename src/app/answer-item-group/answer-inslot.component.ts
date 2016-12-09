import { Component, OnInit,Input } from '@angular/core';
import { AnswerItem } from './answer-item';

@Component({
  selector: 'app-answer-inslot',
  templateUrl: './answer-item.component.html',
  styles: []
})
export class AnswerInslotComponent implements OnInit {
  @Input() answerItem:AnswerItem;
  constructor() { }

  ngOnInit() {
  }

}
