export class YtbListingAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ytb-listing-app-app h1')).getText();
  }
}
