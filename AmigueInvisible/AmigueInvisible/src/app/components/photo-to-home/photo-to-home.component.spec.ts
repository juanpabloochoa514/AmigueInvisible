import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoToHomeComponent } from './photo-to-home.component';

describe('PhotoToHomeComponent', () => {
  let component: PhotoToHomeComponent;
  let fixture: ComponentFixture<PhotoToHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoToHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoToHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
