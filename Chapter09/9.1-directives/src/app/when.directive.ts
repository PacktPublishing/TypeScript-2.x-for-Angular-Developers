import { 
  Directive, 
  Input, 
  TemplateRef, 
  ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWhen]'
})
export class WhenDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appWhen(condition: boolean) {
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
