import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReporteComponent } from './update-reporte.component';

describe('UpdateReporteComponent', () => {
  let component: UpdateReporteComponent;
  let fixture: ComponentFixture<UpdateReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateReporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
