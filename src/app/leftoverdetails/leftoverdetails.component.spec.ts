import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftoverdetailsComponent } from './leftoverdetails.component';

describe('LeftoverdetailsComponent', () => {
  let component: LeftoverdetailsComponent;
  let fixture: ComponentFixture<LeftoverdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftoverdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftoverdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
