import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetALLUserComponent } from './get-alluser.component';

describe('GetALLUserComponent', () => {
  let component: GetALLUserComponent;
  let fixture: ComponentFixture<GetALLUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetALLUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetALLUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
