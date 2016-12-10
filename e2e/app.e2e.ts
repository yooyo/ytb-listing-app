import { YtbListingAppPage } from './app.po';

describe('ytb-listing-app App', function() {
  let page: YtbListingAppPage;

  beforeEach(() => {
    page = new YtbListingAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ytb-listing-app works!');
  });
});
