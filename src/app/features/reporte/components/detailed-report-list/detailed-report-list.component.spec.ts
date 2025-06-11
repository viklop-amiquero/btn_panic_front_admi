import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedReportListComponent } from './detailed-report-list.component';

describe('DetailedReportListComponent', () => {
  let component: DetailedReportListComponent;
  let fixture: ComponentFixture<DetailedReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedReportListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
