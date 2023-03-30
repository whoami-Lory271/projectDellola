import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFrameComponent } from './dog-frame.component';

describe('DogFrameComponent', () => {
  let component: DogFrameComponent;
  let fixture: ComponentFixture<DogFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
