import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionUtilisateursComponent } from './edition-utilisateurs.component';

describe('EditionUtilisateursComponent', () => {
  let component: EditionUtilisateursComponent;
  let fixture: ComponentFixture<EditionUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionUtilisateursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditionUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
