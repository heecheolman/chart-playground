import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendControllerComponent } from './legend-controller.component';

describe('LegendControllerComponent', () => {
  let component: LegendControllerComponent;
  let fixture: ComponentFixture<LegendControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
