import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketMessageComponent } from './socket-message.component';

describe('SocketMessageComponent', () => {
  let component: SocketMessageComponent;
  let fixture: ComponentFixture<SocketMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocketMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
