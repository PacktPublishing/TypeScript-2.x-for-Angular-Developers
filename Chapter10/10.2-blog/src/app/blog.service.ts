import { Injectable } from '@angular/core';

import * as data from './db.json'

@Injectable()
export class BlogService {

  constructor() { }

  getPosts() {
    return (<any>data).map(post => {
      return {
        id: post.imageId,
        imageUrl: `https://res.cloudinary.com/christekh/image/upload/c_fit,q_auto,w_300/${post.imageId}`,
        author: post.collector
      }
    })
  }

  byId(id) {
    return (<any>data)
      .filter(post => post.imageId === id)
      .map(post => {
        return {
          id: post.imageId,
          imageUrl: `https://res.cloudinary.com/christekh/image/upload/c_fit,q_auto,w_300,h_200/${post.imageId}`,
          author: post.collector,
          content: post.description
        }
      })[0]
  }

}
