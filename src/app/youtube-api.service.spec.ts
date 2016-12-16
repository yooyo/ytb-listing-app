import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { YoutubeApiService } from './youtube-api.service';

describe('YoutubeApi Service', () => {
  beforeEachProviders(() => [YoutubeApiService]);

  it('should ...',
      inject([YoutubeApiService], (service: YoutubeApiService) => {
    expect(service).toBeTruthy();
  }));
});
