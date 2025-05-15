import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRolPageComponent } from './create-rol-page.component';

describe('CreateRolPageComponent', () => {
  let component: CreateRolPageComponent;
  let fixture: ComponentFixture<CreateRolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRolPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
