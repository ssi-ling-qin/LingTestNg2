import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppDataService } from './app-data.service';
import { AnswerItemGroupComponent } from './answer-item-group/answer-item-group.component';
import { ScaleItemGroupComponent } from './scale-item-group/scale-item-group.component';
import { AnswerItemComponent } from './answer-item-group/answer-item.component';
import { ScaleItemComponent } from './scale-item-group/scale-item/scale-item.component';
import { AnswerInslotComponent } from './answer-item-group/answer-inslot.component';


@NgModule({
  declarations: [
    AppComponent,
    AnswerItemGroupComponent,
    ScaleItemGroupComponent,
    AnswerItemComponent,
    ScaleItemComponent,
    AnswerInslotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
