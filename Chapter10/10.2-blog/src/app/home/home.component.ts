import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from './../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public posts;
  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

  showPost(id) {
    this.router.navigate(['/post', id]);
  }

}
