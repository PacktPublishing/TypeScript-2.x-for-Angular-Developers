import { CommentService } from './comment.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
