const homePage = require('../../pages/homePage.js');
const data = require('../../data/data.js');


describe('FEATURE: Homepage - type-a-head', () => {
  describe('SCENARIO: I should be able to navigate to a search results page by clicking on a type-a-head option', () => {
      it('GIVEN: I am on the Google homepage', () => {
        browser.url(data.urls.homepage);
      });

      it('WHEN: I click into the search box', () => {
        browser.interact(homePage.selectors.searchBox);
      });

      it('AND: I begin to type into the search box', () => {
        browser.setInputValue(homePage.selectors.searchBox, 'youtub');
      });

      it('THEN: I should see the type-a-head options appear', () => {
        $(homePage.selectors.typeAHeadResult).waitForExist();
      });

      it('WHEN: I click on a type-a-head option', () => {
        browser.interact(homePage.selectors.typeAHeadResult)
      });

      it('THEN: I should be redirected to the corresponding search page', () => {
        expect(browser.getUrl()).toContain('youtube');
      });
  });

  describe('SCENARIO: I should be able to navigate to a search results page by clicking on a type-a-head option', () => {
      it('GIVEN: I am on the Google homepage', () => {
        browser.url(data.urls.homepage);
      });

      it('WHEN: I click into the search box', () => {
        browser.interact(homePage.selectors.searchBox);
      });

      it('AND: I begin to type into the search box', () => {
        browser.setInputValue(homePage.selectors.searchBox, 'youtub');
      });

      it('THEN: I should see the type-a-head options appear', () => {
        $(homePage.selectors.typeAHeadResult).waitForExist();
      });

      it('WHEN: I click out of the searchbox', () => {
        browser.interact(homePage.selectors.pageContainer);
      });

      it('THEN: I should not see the type-a-head options anymore', () => {
        expect($(homePage.selectors.typeAHeadResult).isDisplayed()).toBe(false);
      });
  });
});
