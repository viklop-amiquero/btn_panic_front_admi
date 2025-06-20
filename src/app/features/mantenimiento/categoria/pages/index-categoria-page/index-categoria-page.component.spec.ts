import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCategoriaPageComponent } from './index-categoria-page.component';

describe('IndexCategoriaPageComponent', () => {
  let component: IndexCategoriaPageComponent;
  let fixture: ComponentFixture<IndexCategoriaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexCategoriaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
