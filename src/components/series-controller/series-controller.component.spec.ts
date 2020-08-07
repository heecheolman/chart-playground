import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesControllerComponent } from './series-controller.component';

describe('SeriesControllerComponent', () => {
  let component: SeriesControllerComponent;
  let fixture: ComponentFixture<SeriesControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
