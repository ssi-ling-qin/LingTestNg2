import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-scale-item-group',
  templateUrl: './scale-item-group.component.html',
  styleUrls: ['./scale-item-group.component.css']
})
export class ScaleItemGroupComponent implements OnInit {
  @Input() scaleItemGroup;
  constructor() { }

  ngOnInit() {
  }

}
