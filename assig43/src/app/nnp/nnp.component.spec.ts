import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NnpComponent } from './nnp.component';

describe('NnpComponent', () => {
  let component: NnpComponent;
  let fixture: ComponentFixture<NnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
