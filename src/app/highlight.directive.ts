import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef){ }
  @Input() defaultColor: string;
@Input('appHighlight') highlightColor: string;
 
@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.highlightColor || this.defaultColor || 'lightblue');
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}
private highlight(action: string) {
  this.el.nativeElement.style.backgroundColor = action;
}
// private textDeco(action:string){
//   this.elem.nativeElement.style.textDecoration=action;

// }
}
