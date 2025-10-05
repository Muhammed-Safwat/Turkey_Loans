import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFeatureComponent } from './text-feature.component';

describe('TextFeatureComponent', () => {
  let component: TextFeatureComponent;
  let fixture: ComponentFixture<TextFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
