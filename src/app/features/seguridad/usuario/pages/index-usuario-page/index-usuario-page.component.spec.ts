import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUsuarioPageComponent } from './index-usuario-page.component';

describe('IndexUsuarioPageComponent', () => {
  let component: IndexUsuarioPageComponent;
  let fixture: ComponentFixture<IndexUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexUsuarioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
