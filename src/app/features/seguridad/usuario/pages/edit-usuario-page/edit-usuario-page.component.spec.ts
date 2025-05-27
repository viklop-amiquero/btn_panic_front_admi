import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsuarioPageComponent } from './edit-usuario-page.component';

describe('EditUsuarioPageComponent', () => {
  let component: EditUsuarioPageComponent;
  let fixture: ComponentFixture<EditUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUsuarioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
