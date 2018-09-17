import { ITrackPage } from './app.po';

describe('i-track App', () => {
  let page: ITrackPage;

  beforeEach(() => {
    page = new ITrackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
