import { EdificiosNGPage } from './app.po';

describe('edificios-ng App', function() {
  let page: EdificiosNGPage;

  beforeEach(() => {
    page = new EdificiosNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
