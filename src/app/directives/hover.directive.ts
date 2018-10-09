import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement,
                          'background-color',
                          'green');
  }

  @HostListener('mouseenter') mouseIn(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseleave') mouseOut(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
