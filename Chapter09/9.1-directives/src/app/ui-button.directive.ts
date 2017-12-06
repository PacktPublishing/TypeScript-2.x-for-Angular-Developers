import { 
  Directive, 
  ElementRef, 
  HostListener, 
  Input,
  OnInit } from '@angular/core';

@Directive({
  selector: '[appUiButton]'
})
export class UiButtonDirective implements OnInit {
  @Input() bgColor: string;
  @Input() hoverBgColor: string;
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = '#ff00a6';
    
  }

  ngOnInit() {
    console.log(this.bgColor);
    Object.assign(this.el.nativeElement.style, {
      backgroundColor: this.bgColor || '#ff00a6',
      padding: '7px 15px',
      fontSize: '16px',
      color: '#fff',
      border: 'none',
      borderRadius: '4px'
    })
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.bgColor);
    this.el.nativeElement.style.backgroundColor = this.hoverBgColor || '#000';
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || '#ff00a6';
  }
}
