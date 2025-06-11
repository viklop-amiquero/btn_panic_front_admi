import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexReportePageComponent } from './index-reporte-page.component';

describe('IndexReportePageComponent', () => {
  let component: IndexReportePageComponent;
  let fixture: ComponentFixture<IndexReportePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexReportePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexReportePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
