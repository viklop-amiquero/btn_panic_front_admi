import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsuarioPageComponent } from './create-usuario-page.component';

describe('CreateUsuarioPageComponent', () => {
  let component: CreateUsuarioPageComponent;
  let fixture: ComponentFixture<CreateUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUsuarioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
