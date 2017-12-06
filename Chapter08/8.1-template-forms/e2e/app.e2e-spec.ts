import { TemplateFormsPage } from './app.po';

describe('template-forms App', () => {
  let page: TemplateFormsPage;

  beforeEach(() => {
    page = new TemplateFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
