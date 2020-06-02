const searchPage = require('../../pages/searchPage.js');
const data = require('../../data/data.js');

describe('FEATURE: search page - search results', () => {
  describe('SCENARIO: I should be able to go to a search result\'s webpage by clicking on it', () => {
      it('GIVEN: I am on a google search page', () => {
        browser.url(data.urls.search.youtube);
      });

      it('WHEN: I click on a result', () => {
        browser.interact(searchPage.selectors.result);
      });

      it('THEN: I should be redirected to that result\'s webpage', () => {
        expect(browser.getUrl()).toContain('youtube.com');
      });
  });
});
