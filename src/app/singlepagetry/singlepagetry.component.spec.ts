import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepagetryComponent } from './singlepagetry.component';

describe('SinglepagetryComponent', () => {
  let component: SinglepagetryComponent;
  let fixture: ComponentFixture<SinglepagetryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepagetryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglepagetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
