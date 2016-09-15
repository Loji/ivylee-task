import { IvyleeTaskMigrationPage } from './app.po';

describe('ivylee-task-migration App', function() {
  let page: IvyleeTaskMigrationPage;

  beforeEach(() => {
    page = new IvyleeTaskMigrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
