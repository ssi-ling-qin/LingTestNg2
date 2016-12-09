import { Component, OnInit,Input,OnChanges} from '@angular/core';
import { AnswerItem } from './answer-item';
import { ScaleItem } from '../scale-item-group/scale-item';
import { AppDataService } from '../app-data.service';
declare var jQuery:any;


@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.css']
})
export class AnswerItemComponent implements OnInit,OnChanges {
  @Input() answerItem:AnswerItem;
  selectedScaleCode:string;
  selectedSlot;

  constructor(private appData:AppDataService) { 
    
  }

  ngOnChanges(){
    console.log('answer item on change');
  }

  ngOnInit() {
    this.getActiveState();

    
  }

  ngAfterContentInit() {
    this.appData.scaleItemClicked.subscribe(
      data=>{
        //console.log('subscribed',this.answerItem.code);
        if(this.answerItem.isActive){
             //console.log(this.answerItem.code,'selected scale',data);
             this.onClicked(data.selectedScale);
              //update activeItem
             this.appData.activeItem=this.appData.getActiveItem(this.appData.appAnswerGroups);
        }
        if(this.appData.activeItem) {
           this.getActiveState();
         }
         //console.log('subscribed',this.appData.activeItem,this.answerItem.isActive);
      }
    );
   }


  getActiveState(){
    this.answerItem.isActive=(this.answerItem.code===this.appData.activeItem.code)?true:false;
  }

  onClicked(selectedScale:ScaleItem){
    if(this.answerItem.isActive){
        //console.log(this.answerItem.code,'selected scale',selectedScale);
        //console.log('onClicked',selectedScale);
          this.answerItem.selectedSlot=selectedScale;
          this.answerItem.value=selectedScale.code;
          this.selectedScaleCode=selectedScale.code;
          this.selectedSlot=jQuery('#target_'+this.selectedScaleCode);
          //console.log(this.selectedScaleCode,this.selectedSlot);
    }

  }

}
