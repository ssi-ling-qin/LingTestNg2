import { Component, OnInit,Input } from '@angular/core';
import { AnswerItem } from './answer-item';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.css']
})
export class AnswerItemComponent implements OnInit {
  @Input() answerItem:AnswerItem;
  constructor() { }

  ngOnInit() {
  }

}
