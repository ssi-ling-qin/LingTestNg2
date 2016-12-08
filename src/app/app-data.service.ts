import { Injectable } from '@angular/core';
import { AnswerItem } from './answer-item-group/answer-item';

@Injectable()
export class AppDataService {
  
  appDataModel={"aAnswerGroups":[{"title":null,"items":[{"code":"1","selected":[false,false,false],"value":null,"label":"item 1","isOE":false,"sOEValue":""}]},{"title":null,"items":[{"code":"2","selected":[false,false,false],"value":null,"label":"item 2","isOE":false,"sOEValue":""}]},{"title":null,"items":[{"code":"3","selected":[false,false,false],"value":null,"label":"item 3","isOE":false,"sOEValue":""}]},{"title":null,"items":[{"code":"4","selected":[false,false,false],"value":null,"label":"item 4","isOE":false,"sOEValue":""}]},{"title":null,"items":[{"code":"5","selected":[false,false,false],"value":null,"label":"item 5","isOE":false,"sOEValue":""}]}],"aScaleGroups":[{"title":null,"items":[{"code":"1","label":"Group 1"}]},{"title":null,"items":[{"code":"2","label":"Group 2"}]},{"title":null,"items":[{"code":"3","label":"Group 3"}]},{"title":null,"items":[{"code":"4","label":"Group 4"}]},{"title":null,"items":[{"code":"5","label":"Group 5"}]}],"answerValue":[]};


	
  activeItem:AnswerItem;

  constructor() {
		this.activeItem=this.getActiveItem();
		console.log(this.activeItem);
	}

  getActiveItem(){
  	let bUnansweredFound=false;
		let activeItem=this.appDataModel.aAnswerGroups[0].items[0];
  	this.appDataModel.aAnswerGroups.forEach((group, index) => {
  		let answerGroup=group;
			//console.log("index",index)
			if(!bUnansweredFound){
				for (let i = 0; i <answerGroup.items.length; i++) { 
						if(!answerGroup.items[i].value){
							bUnansweredFound=true;
							//console.log(bUnansweredFound,answerGroup.items[i]);
							activeItem=answerGroup.items[i];
							break;
						}
				}	
			}	
	});

		return activeItem;

  }


}
