import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { AppDataService } from '../../app-data.service';
import { ScaleItem } from '../scale-item';
import { AnswerItem } from '../../answer-item-group/answer-item';

@Component({
  selector: 'app-scale-item',
  templateUrl: './scale-item.component.html',
  styleUrls: ['./scale-item.component.css']
})
export class ScaleItemComponent implements OnInit {
  @Input() scaleItem:ScaleItem;

  constructor(private appData:AppDataService) { }

  ngOnInit() {

  }

  onClick(event,scaleItem:ScaleItem){
    //console.log('scale clicled',this.appData.activeItem,scaleItem);
    // add active item to scale item
    if(this.appData.activeItem){
    this.scaleItem.answersedItems.push(new AnswerItem(
        this.appData.activeItem.code,
        this.appData.activeItem.selected,
        this.appData.activeItem.value,
        this.appData.activeItem.label,
        this.appData.activeItem.isOE, 
        this.appData.activeItem.sOEValue,
        this.appData.activeItem.groupIndex,
        this.appData.activeItem.inGroupIndex,
        false     
    ));


    // emit event to update answer item status and value
    this.appData.scaleItemClicked.emit({
      selectedScale:scaleItem
     });
    }  
  }
}
