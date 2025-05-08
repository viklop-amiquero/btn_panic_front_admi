import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavFeatureComponent } from './sidenav-feature.component';

describe('SidenavFeatureComponent', () => {
  let component: SidenavFeatureComponent;
  let fixture: ComponentFixture<SidenavFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
