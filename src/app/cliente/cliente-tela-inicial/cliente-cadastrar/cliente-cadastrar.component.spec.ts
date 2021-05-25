import { AppModule } from '../../../app.module';
import { ClienteService } from '../../cliente.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadastrarComponent } from './cliente-cadastrar.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

describe('ClienteCadastrarComponent', () => {
  let component: ClienteCadastrarComponent;
  let fixture: ComponentFixture<ClienteCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteCadastrarComponent],
      imports: [MatSnackBarModule,
        HttpClientModule,
        AppModule
      ],
      providers: [ClienteService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
