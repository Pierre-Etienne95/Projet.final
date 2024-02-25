import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConsommableComponent } from './gestion-consommable.component';

describe('GestionConsommableComponent', () => {
  let component: GestionConsommableComponent;
  let fixture: ComponentFixture<GestionConsommableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionConsommableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionConsommableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
