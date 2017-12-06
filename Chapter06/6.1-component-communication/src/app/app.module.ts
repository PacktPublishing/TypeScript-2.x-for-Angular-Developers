import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentItemComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
