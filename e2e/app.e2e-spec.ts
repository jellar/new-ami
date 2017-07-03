import { UiRouterPage } from './app.po';

describe('ui-router App', () => {
  let page: UiRouterPage;

  beforeEach(() => {
    page = new UiRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
