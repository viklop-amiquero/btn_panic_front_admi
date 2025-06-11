import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMapaPageComponent } from './index-mapa-page.component';

describe('IndexMapaPageComponent', () => {
  let component: IndexMapaPageComponent;
  let fixture: ComponentFixture<IndexMapaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexMapaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexMapaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
