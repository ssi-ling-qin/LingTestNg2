import { Component,Inject } from '@angular/core';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppDataService]
})
export class AppComponent {
  
  constructor(private appData:AppDataService) {
     console.log(this.appData.appDataModel.aAnswerGroups);
  } 

}

