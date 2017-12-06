import { TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';
import { Image } from '../image';
import { ImageService } from '../image.service';


describe('ImageComponent', () => {
  let comp: ImageComponent;
  const imageService = new ImageService();

  beforeEach(() => comp = new ImageComponent( imageService ));

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('right data is displayed to the user', () => {

    comp.ngOnInit();

    expect(typeof(comp.image).id).toEqual('number');
    expect(typeof(comp.image).name).toEqual('string');
    expect(typeof(comp.image).link).toEqual('string');
  });

});
