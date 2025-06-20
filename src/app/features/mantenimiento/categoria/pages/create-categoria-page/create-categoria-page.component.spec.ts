import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoriaPageComponent } from './create-categoria-page.component';

describe('CreateCategoriaPageComponent', () => {
  let component: CreateCategoriaPageComponent;
  let fixture: ComponentFixture<CreateCategoriaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCategoriaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
