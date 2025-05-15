import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolListTableComponent } from './rol-list-table.component';

describe('RolListTableComponent', () => {
  let component: RolListTableComponent;
  let fixture: ComponentFixture<RolListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RolListTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
