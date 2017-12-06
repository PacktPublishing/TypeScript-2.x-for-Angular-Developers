import { DataPage } from './app.po';

describe('data App', () => {
  let page: DataPage;

  beforeEach(() => {
    page = new DataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
