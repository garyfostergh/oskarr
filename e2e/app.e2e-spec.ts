import { OskarrPage } from './app.po';

describe('oskarr App', function() {
  let page: OskarrPage;

  beforeEach(() => {
    page = new OskarrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
