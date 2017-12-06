import { Component, OnInit } from '@angular/core';
import { Image } from '../image';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image: Image;

  constructor(private imageService: ImageService) { }

  getImage(): void {
    this.image = this.imageService.getImage();
  }

  ngOnInit() {
    this.getImage();
  }

}
