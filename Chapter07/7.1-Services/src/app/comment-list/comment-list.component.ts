import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  private comments: Array<any>;
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

  removeComment(comment) {
    this.comments = this.commentService.removeComment(comment);
  }

  showComment(comment) {
    this.commentService.showComment(comment);
  }

  showPrompt() {
    const commentString = window.prompt('Please enter your username and content: ', 'username: content');
    const parsedComment = this.commentService.parseComment(commentString);
    this.commentService.addComment(parsedComment);
  }

}
