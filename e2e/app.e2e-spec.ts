import { ProdubanAppPage } from './app.po';

describe('produban-app App', function() {
  let page: ProdubanAppPage;

  beforeEach(() => {
    page = new ProdubanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
