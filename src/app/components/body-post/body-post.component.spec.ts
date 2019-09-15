import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPostComponent } from './body-post.component';

describe('BodyPostComponent', () => {
  let component: BodyPostComponent;
  let fixture: ComponentFixture<BodyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
