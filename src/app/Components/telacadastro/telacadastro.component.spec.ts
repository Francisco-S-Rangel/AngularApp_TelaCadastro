import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelacadastroComponent } from './telacadastro.component';

describe('TelacadastroComponent', () => {
  let component: TelacadastroComponent;
  let fixture: ComponentFixture<TelacadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelacadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelacadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
