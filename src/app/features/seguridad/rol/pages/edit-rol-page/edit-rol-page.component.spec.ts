import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolPageComponent } from './edit-rol-page.component';

describe('EditRolPageComponent', () => {
  let component: EditRolPageComponent;
  let fixture: ComponentFixture<EditRolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRolPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
