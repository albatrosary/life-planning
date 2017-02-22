import { LifePlanningPage } from './app.po';

describe('life-planning App', function() {
  let page: LifePlanningPage;

  beforeEach(() => {
    page = new LifePlanningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
