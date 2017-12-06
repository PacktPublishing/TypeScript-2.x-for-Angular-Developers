import { EncapsulationPage } from './app.po';

describe('encapsulation App', () => {
  let page: EncapsulationPage;

  beforeEach(() => {
    page = new EncapsulationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
