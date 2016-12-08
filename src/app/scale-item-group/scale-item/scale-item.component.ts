import { Component, OnInit,Input } from '@angular/core';
import { ScaleItem } from '../scale-item';

@Component({
  selector: 'app-scale-item',
  templateUrl: './scale-item.component.html',
  styleUrls: ['./scale-item.component.css']
})
export class ScaleItemComponent implements OnInit {
  @Input() scaleItem:ScaleItem;

  constructor() { }

  ngOnInit() {
  }

}
