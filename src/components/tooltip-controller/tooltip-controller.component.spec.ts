import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipControllerComponent } from './tooltip-controller.component';

describe('TooltipControllerComponent', () => {
  let component: TooltipControllerComponent;
  let fixture: ComponentFixture<TooltipControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
