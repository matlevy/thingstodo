import { ThingstodoPage } from './app.po';

describe('thingstodo App', () => {
  let page: ThingstodoPage;

  beforeEach(() => {
    page = new ThingstodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
