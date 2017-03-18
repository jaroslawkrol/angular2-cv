import { CvFrontPage } from './app.po';

describe('cv-front App', function() {
  let page: CvFrontPage;

  beforeEach(() => {
    page = new CvFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
