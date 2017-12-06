import { ComponentCommunicationPage } from './app.po';

describe('component-communication App', () => {
  let page: ComponentCommunicationPage;

  beforeEach(() => {
    page = new ComponentCommunicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
