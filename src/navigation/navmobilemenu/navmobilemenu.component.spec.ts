import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmobilemenuComponent } from './navmobilemenu.component';

describe('NavmobilemenuComponent', () => {
  let component: NavmobilemenuComponent;
  let fixture: ComponentFixture<NavmobilemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavmobilemenuComponent]
    });
    fixture = TestBed.createComponent(NavmobilemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
