import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftoveruiComponent } from './leftoverui.component';

describe('LeftoveruiComponent', () => {
  let component: LeftoveruiComponent;
  let fixture: ComponentFixture<LeftoveruiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftoveruiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftoveruiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
