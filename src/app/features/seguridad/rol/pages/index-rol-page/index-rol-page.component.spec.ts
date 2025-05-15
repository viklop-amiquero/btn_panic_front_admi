import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRolPageComponent } from './index-rol-page.component';

describe('IndexRolPageComponent', () => {
  let component: IndexRolPageComponent;
  let fixture: ComponentFixture<IndexRolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexRolPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexRolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
