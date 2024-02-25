import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionLocalComponent } from './edition-local.component';

describe('EditionLocalComponent', () => {
  let component: EditionLocalComponent;
  let fixture: ComponentFixture<EditionLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionLocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditionLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
