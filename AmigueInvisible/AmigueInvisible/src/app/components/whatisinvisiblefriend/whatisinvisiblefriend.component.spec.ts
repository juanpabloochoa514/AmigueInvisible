import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatisinvisiblefriendComponent } from './whatisinvisiblefriend.component';

describe('WhatisinvisiblefriendComponent', () => {
  let component: WhatisinvisiblefriendComponent;
  let fixture: ComponentFixture<WhatisinvisiblefriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatisinvisiblefriendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatisinvisiblefriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
