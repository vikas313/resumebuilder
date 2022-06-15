import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicinputsComponent } from './academicinputs.component';

describe('AcademicinputsComponent', () => {
  let component: AcademicinputsComponent;
  let fixture: ComponentFixture<AcademicinputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicinputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
