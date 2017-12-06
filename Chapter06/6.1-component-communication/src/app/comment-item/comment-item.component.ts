import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {
  
  private _comment;
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set comment(comment) {
    this._comment = Object.assign(comment, {author: comment.author.toUpperCase()});
  }

  get comment() {
    return this._comment
  }

}
