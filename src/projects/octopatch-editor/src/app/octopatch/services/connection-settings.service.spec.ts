import { TestBed } from '@angular/core/testing';

import { ConnectionSettingsService } from './connection-settings.service';

describe('ConnectionSettingsService', () => {
  let service: ConnectionSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
