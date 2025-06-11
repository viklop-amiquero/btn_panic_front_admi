import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedListReportsComponent } from './detailed-list-reports.component';

describe('DetailedListReportsComponent', () => {
  let component: DetailedListReportsComponent;
  let fixture: ComponentFixture<DetailedListReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedListReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedListReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
