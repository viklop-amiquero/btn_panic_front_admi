import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReporteComponent } from './list-reporte.component';

describe('ListReporteComponent', () => {
  let component: ListReporteComponent;
  let fixture: ComponentFixture<ListReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListReporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
