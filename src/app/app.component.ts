import { Component,Inject} from '@angular/core';
import { AppDataService } from './app-data.service';
import { AnswerItem } from './answer-item-group/answer-item';
import { ScaleItem } from './scale-item-group/scale-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
   //providers:[AppDataService]
})
export class AppComponent{
  //activeItem:AnswerItem;
  
  selectedScale:ScaleItem;
  constructor(private appData:AppDataService) {
     //console.log(this.appData.appDataModel.aAnswerGroups);
     //console.log(this.appData.appDataModel.aScaleGroups);
     //this.activeItem=this.appData.getActiveItem();
     //console.log(this.activeItem);
  }

 

  scaleItemclickReceived(event){
    //console.log('app scaleItemclickReceived',event);
    this.appData.activeItem.value=event.selectedScale.code;
    this.appData.getActiveItem();
    console.log('app scaleItemclickReceived',this.appData.activeItem);
  }

}

