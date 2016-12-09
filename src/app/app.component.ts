import { Component,Inject } from '@angular/core';
import { AppDataService } from './app-data.service';
import { ScaleItemGroup } from './scale-item-group/scale-item-group';
import { AnswerItemGroup } from './answer-item-group/answer-item-group';
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
  //appAnswerGroups:AnswerItemGroup[]=[];
  //appScaleGroups:ScaleItemGroup[]=[];

  selectedScale:ScaleItem;
  constructor(private appData:AppDataService) {
     this.createAnswerItemGroups(this.appData.appDataModel.aAnswerGroups);
     //console.log(this.appAnswerGroups);
     this. createScaleItemGroups(this.appData.appDataModel.aScaleGroups);
     // define acitve answer item
     this.appData.activeItem=this.appData.getActiveItem(this.appData.appAnswerGroups);
  }

   
  createAnswerItemGroups(groupsData){
    
	  for (var g = 0; g <groupsData.length; g++) { 
		    let currentGroupData=groupsData[g];
        this.appData.appAnswerGroups.push(new AnswerItemGroup(
          currentGroupData.title,
          []
        ))
       for (var i = 0; i <currentGroupData.items.length; i++) { 
            this.appData.appAnswerGroups[g].items.push(new AnswerItem(
              currentGroupData.items[i].code,
              currentGroupData.items[i].selected,
              currentGroupData.items[i].value,
              currentGroupData.items[i].label,
              currentGroupData.items[i].isOE, 
              currentGroupData.items[i].sOEValue,
              g,
              i,
              true                                                      
            ));
        }
               
	  };
    console.log(this.appData.appAnswerGroups);
  }

  createScaleItemGroups(groupsData){
    
	  groupsData.forEach((groupData,grpIndex) => {
		    let currentGroupData=groupData;
        this.appData.appScaleGroups.push(new ScaleItemGroup(
          currentGroupData.title,
          []
        ))
        
        for (let l = 0; l<currentGroupData.items.length; l++) {
             
            this.appData.appScaleGroups[grpIndex].items.push(new ScaleItem(
              currentGroupData.items[l].code,
              currentGroupData.items[l].label,
              grpIndex,
              l,
              []                                                      
            ));
        }
               
	  });

    console.log(this.appData.appScaleGroups);
   
  }

  scaleItemclickReceived(event){
    this.selectedScale=event.selectedScale;
    this.appData.activeItem.selectedSlot=this.selectedScale;
    //this.appData.activeItem.onClicked(event.selectedScale);
    /*this.appData.getActiveItem();*/
    console.log('app scaleItemclickReceived',this.appData.activeItem);
  }

}

