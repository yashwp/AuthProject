import { AuthProjectPage } from './app.po';

describe('auth-project App', function() {
  let page: AuthProjectPage;

  beforeEach(() => {
    page = new AuthProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
