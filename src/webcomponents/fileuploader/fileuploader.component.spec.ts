import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploaderComponent } from './fileuploader.component';

describe('FileuploaderComponent', () => {
  let component: FileuploaderComponent;
  let fixture: ComponentFixture<FileuploaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileuploaderComponent]
    });
    fixture = TestBed.createComponent(FileuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
