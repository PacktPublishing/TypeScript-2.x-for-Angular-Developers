import { Injectable } from '@angular/core';
import { Image } from './image';
import { IMAGES } from './stock-images';

@Injectable()
export class ImageService {

  constructor() {
  }

  getImage(): Image {
    const rand_number = Math.floor(Math.random() * 4);
    return IMAGES[rand_number];
  }
}
