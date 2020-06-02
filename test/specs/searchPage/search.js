const searchPage = require('../../pages/searchPage.js');
const data = require('../../data/data.js');

describe('FEATURE: Search page - search box', () => {
  describe('SCENARIO: I should be able to perform a google search from a google search page', () => {
      it('GIVEN: I am on a google search page', () => {
        browser.url(data.urls.search.movies);
      });

      it('WHEN: I click into the search box', () => {
        browser.interact(searchPage.selectors.searchBox);
      });

      it('AND: I type a search term into the searchbox', () => {
        browser.setInputValue(searchPage.selectors.searchBox, 'books');
      });

      it('AND: I click the search button', () => {
        browser.interact(searchPage.selectors.searchIcon);
      });

      it('THEN: I should see the correct search page', () => {
        expect(browser.getUrl()).toContain('books');
      });
  });
});
