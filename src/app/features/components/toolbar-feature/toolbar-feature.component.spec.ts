import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarFeatureComponent } from './toolbar-feature.component';

describe('ToolbarFeatureComponent', () => {
  let component: ToolbarFeatureComponent;
  let fixture: ComponentFixture<ToolbarFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
