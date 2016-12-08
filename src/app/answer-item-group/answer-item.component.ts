import { Component, OnInit,Input,OnChanges} from '@angular/core';
import { AnswerItem } from './answer-item';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.css']
})
export class AnswerItemComponent implements OnInit,OnChanges {
  @Input() answerItem:AnswerItem;

  constructor(private appData:AppDataService) { 
    
  }

  ngOnChanges(){
    console.log('answer item on change');
  }

  ngOnInit() {
    this.getActiveState()
  }


  getActiveState(){
     this.answerItem.isActive=(this.answerItem.code===this.appData.activeItem.code)?true:false;
  }

}
