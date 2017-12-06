import { NgTodoAppPage } from './app.po';

describe('ng-todo-app App', function() {
  let page: NgTodoAppPage;

  beforeEach(() => {
    page = new NgTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
