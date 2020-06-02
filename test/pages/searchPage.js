class SearchPage {
  constructor(){
    this.selectors = {
      searchIcon: 'form[action="/search"] [type="submit"]',
      searchBox: '[name="q"]',
      result: '.g a'
    }
  }
}

module.exports = new SearchPage();
