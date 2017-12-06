import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import { TestBed, ComponentFixture} from '@angular/core/testing';
import { BackgroundChangerDirective } from './background-changer.directive';

// create dummy component
@Component({
  template: `<input type="text" appBackgroundChanger>`
})
class TestHoverFocusComponent {
}

describe('BackgroundChangerDirective', () => {

  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let input_element: DebugElement;

  //  so we confiugure the testbed and initialize component , we alos create input element
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, BackgroundChangerDirective]
    });
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    input_element = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new BackgroundChangerDirective();
    expect(directive).toBeTruthy();
  });

  it('Hover over input to check background change', () => {
    input_element.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(input_element.nativeElement.style.backgroundColor).toBe('red');

    input_element.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(input_element.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
