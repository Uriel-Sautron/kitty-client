import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketMessageListComponent } from './socket-message-list.component';

describe('SocketMessageListComponent', () => {
  let component: SocketMessageListComponent;
  let fixture: ComponentFixture<SocketMessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocketMessageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
