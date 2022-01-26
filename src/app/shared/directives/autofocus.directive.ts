import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}

  @Input() appAutoFocus: boolean = true;

  ngAfterViewInit(): void {
    if (this.appAutoFocus) {
      this.element.nativeElement.focus()
    }
  }

}
