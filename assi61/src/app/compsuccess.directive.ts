import { Directive } from '@angular/core';
import { ElementRef, HostListener} from '@angular/core';
//import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material';

@Directive({
    selector: '[appcompsuccess]'
})

export class compsuccessDirective
{
    constructor(private e:ElementRef)
    {}

@HostListener('mouseenter') onmouseenter()
{
    this.setcolor('green');
}

@HostListener('mouseleave') onmouseleave()
{
    this.setcolor('blue');
}

setcolor(color:string)
{
    this.e.nativeElement.style.background=color;
}

}