import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {

  comment: any = {
    author: '',
    content: ''
  };
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.commentService.commentSelected$.subscribe(comment => {
      this.comment = comment;
    })
  }

}
