import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointSelectionComponent } from './endpoint-selection.component';

describe('EndpointSelectionComponent', () => {
  let component: EndpointSelectionComponent;
  let fixture: ComponentFixture<EndpointSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
