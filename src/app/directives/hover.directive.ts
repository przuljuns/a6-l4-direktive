import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() defaultColor = 'gray';
  @Input() highlightedColor = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseIn(eventData: Event) {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseOut(eventData: Event) {
    this.backgroundColor = 'gray';
  }
}
