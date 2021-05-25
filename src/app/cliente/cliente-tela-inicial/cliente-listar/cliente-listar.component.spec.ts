import { AppModule } from './../../app.module';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './../cliente.service';
import { MaterialModule } from '../../utils/material/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListarComponent } from './cliente-listar.component';

describe('ClienteListarComponent', () => {
  let component: ClienteListarComponent;
  let fixture: ComponentFixture<ClienteListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteListarComponent ],
      imports: [
        MaterialModule,
        HttpClientModule,
        AppModule
      ],
      providers: [ ClienteService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
