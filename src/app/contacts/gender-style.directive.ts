import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appGenderStyle]'
})
export class GenderStyleDirective implements OnInit {
  @Input() gender: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.gender === 'Male') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'darkblue');
    } else if (this.gender === 'Female') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightpink');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#cc0066');
    }
  }
}