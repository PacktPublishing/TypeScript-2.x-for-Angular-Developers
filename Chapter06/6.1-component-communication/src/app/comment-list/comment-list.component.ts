import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() comments;
  @Output() onShowComment = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
  }

  showComment(comment) {
    this.onShowComment.emit(comment);
  }

}
