import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDeletarComponent } from './cliente-deletar.component';

describe('ClienteDeletarComponent', () => {
  let component: ClienteDeletarComponent;
  let fixture: ComponentFixture<ClienteDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDeletarComponent ]
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
