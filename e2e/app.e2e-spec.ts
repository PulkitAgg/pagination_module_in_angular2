import { FinalPaginationPage } from './app.po';

describe('final-pagination App', () => {
  let page: FinalPaginationPage;

  beforeEach(() => {
    page = new FinalPaginationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
