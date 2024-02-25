import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLocalComponent } from './gestion-local.component';

describe('GestionLocalComponent', () => {
  let component: GestionLocalComponent;
  let fixture: ComponentFixture<GestionLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionLocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
