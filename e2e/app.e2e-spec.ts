import { IvyleeTaskPage } from './app.po';

describe('ivylee-task App', function() {
  let page: IvyleeTaskPage;

  beforeEach(() => {
    page = new IvyleeTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
