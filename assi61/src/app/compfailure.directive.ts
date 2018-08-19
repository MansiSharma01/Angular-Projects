import { Directive } from '@angular/core';
import { ElementRef, HostListener} from '@angular/core';
//import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material';

@Directive({
    selector: '[appcompsuccess]'
})

export class compfailureDirective
{
    constructor(private e1:ElementRef)
    {}

@HostListener('mouseenter') onmouseenter()
{
    this.setcolor('red');
}

@HostListener('mouseleave') onmouseleave()
{
    this.setcolor('pink');
}

setcolor(color:string)
{
    this.e1.nativeElement.style.background=color;
}

}