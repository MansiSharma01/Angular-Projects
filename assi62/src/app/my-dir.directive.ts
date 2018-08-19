import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective 
{
 
  constructor(private ele:ElementRef) 
  {
    ele.nativeElement.style.background='yellow'
  } 
}
