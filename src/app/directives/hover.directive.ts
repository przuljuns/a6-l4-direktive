import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseIn(eventData: Event) {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseOut(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
