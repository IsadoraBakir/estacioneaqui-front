import { AppModule } from './../../app.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../utils/material/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEditarComponent } from './cliente-editar.component';

describe('ClienteEditarComponent', () => {
  let component: ClienteEditarComponent;
  let fixture: ComponentFixture<ClienteEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEditarComponent ],
      imports: [
        MaterialModule,
        HttpClientModule,
        AppModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
