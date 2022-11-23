import { TestBed } from '@angular/core/testing';

import { SocketMessageService } from './socket-message.service';

describe('SocketMessageService', () => {
  let service: SocketMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
