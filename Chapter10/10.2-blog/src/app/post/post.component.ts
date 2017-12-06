import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from './../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.post = this.blogService.byId(params.id)
      console.log(this.post)
   });
  }

}
