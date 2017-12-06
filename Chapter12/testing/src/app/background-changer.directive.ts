import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgroundChanger]'
})
export class BackgroundChangerDirective {

  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseover') onHover() {
    this.backgroundColor = 'red';
  }

  @HostListener('mouseout') onLeave() {
    this.backgroundColor = 'inherit';
  }

}
