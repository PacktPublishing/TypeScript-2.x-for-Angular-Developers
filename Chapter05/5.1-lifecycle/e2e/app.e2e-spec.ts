import { LifecyclePage } from './app.po';

describe('lifecycle App', () => {
  let page: LifecyclePage;

  beforeEach(() => {
    page = new LifecyclePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
