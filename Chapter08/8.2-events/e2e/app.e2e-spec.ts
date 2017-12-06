import { EventsPage } from './app.po';

describe('events App', () => {
  let page: EventsPage;

  beforeEach(() => {
    page = new EventsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
