import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapReportePageComponent } from './map-reporte-page.component';

describe('MapReportePageComponent', () => {
  let component: MapReportePageComponent;
  let fixture: ComponentFixture<MapReportePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapReportePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapReportePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
