import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTelaInicialComponent } from './cliente-tela-inicial.component';

describe('ClienteTelaInicialComponent', () => {
  let component: ClienteTelaInicialComponent;
  let fixture: ComponentFixture<ClienteTelaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteTelaInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTelaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
