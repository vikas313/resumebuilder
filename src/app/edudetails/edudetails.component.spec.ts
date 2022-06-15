import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdudetailsComponent } from './edudetails.component';

describe('EdudetailsComponent', () => {
  let component: EdudetailsComponent;
  let fixture: ComponentFixture<EdudetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdudetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdudetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
