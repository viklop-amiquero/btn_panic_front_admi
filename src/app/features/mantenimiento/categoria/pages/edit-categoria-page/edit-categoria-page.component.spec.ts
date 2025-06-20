import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoriaPageComponent } from './edit-categoria-page.component';

describe('EditCategoriaPageComponent', () => {
  let component: EditCategoriaPageComponent;
  let fixture: ComponentFixture<EditCategoriaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCategoriaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
