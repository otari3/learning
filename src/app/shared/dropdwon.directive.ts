import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdwon]',
})
export class DropdwonDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    if (this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = false;
    }
  }
  constructor(private elRef: ElementRef) {}
}
