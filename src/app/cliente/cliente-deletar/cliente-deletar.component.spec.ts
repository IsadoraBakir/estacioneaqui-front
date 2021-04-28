import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { MaterialModule } from 'src/app/utils/material/material.module';
import { ClienteService } from '../cliente.service';

import { ClienteDeletarComponent } from './cliente-deletar.component';

describe('ClienteDeletarComponent', () => {
  let component: ClienteDeletarComponent;
  let fixture: ComponentFixture<ClienteDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDeletarComponent ],
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
    fixture = TestBed.createComponent(ClienteDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
