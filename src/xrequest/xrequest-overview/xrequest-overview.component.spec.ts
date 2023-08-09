import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XrequestOverviewComponent } from './xrequest-overview.component';

describe('XrequestOverviewComponent', () => {
  let component: XrequestOverviewComponent;
  let fixture: ComponentFixture<XrequestOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XrequestOverviewComponent]
    });
    fixture = TestBed.createComponent(XrequestOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
