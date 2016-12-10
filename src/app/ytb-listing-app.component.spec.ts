import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { YtbListingAppAppComponent } from '../app/ytb-listing-app.component';

beforeEachProviders(() => [YtbListingAppAppComponent]);

describe('App: YtbListingApp', () => {
  it('should create the app',
      inject([YtbListingAppAppComponent], (app: YtbListingAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ytb-listing-app works!\'',
      inject([YtbListingAppAppComponent], (app: YtbListingAppAppComponent) => {
    expect(app.title).toEqual('ytb-listing-app works!');
  }));
});
