import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inroot2Component } from './inroot2.component';

describe('Inroot2Component', () => {
  let component: Inroot2Component;
  let fixture: ComponentFixture<Inroot2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inroot2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inroot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
