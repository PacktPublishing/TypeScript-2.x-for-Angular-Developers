import { TestBed, inject } from '@angular/core/testing';
import { ImageService } from './image.service';
import { Image } from './image';

describe('ImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageService]
    });
  });

  it('should be created', inject([ImageService], (service: ImageService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getImage function defined', inject([ImageService], (service: ImageService) => {
    expect(service.getImage).toBeDefined();
  }));

  it('should have getImage function return image object', inject([ImageService], (service: ImageService) => {
    expect(typeof(service.getImage())).toEqual('object');
    expect(typeof(service.getImage().id )).toEqual('number');
    expect(typeof(service.getImage().name )).toEqual('string');
    expect(typeof(service.getImage().link )).toEqual('string');
  }));

});
