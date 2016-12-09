//import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Component, OnInit,Input } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { ScaleItem } from './scale-item';

@Component({
  selector: 'app-scale-item-group',
  templateUrl: './scale-item-group.component.html',
  styleUrls: ['./scale-item-group.component.css']
})
export class ScaleItemGroupComponent implements OnInit {
  @Input() scaleItemGroup;
 
 /* @Output() scaleItemClicked:EventEmitter<any>=new EventEmitter();
  notifyScaleClick(event,scaleItem:ScaleItem){
    console.log(' notifyScaleClick',event,scaleItem);
    this.scaleItemClicked.emit({
      selectedScale:scaleItem
     });  
  }*/

  constructor(private appData:AppDataService) { }

  ngOnInit() {
  }


}
