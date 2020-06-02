class HomePage {
  constructor(){
    this.selectors = {
      searchBox: '[name="q"]',
      typeAHeadResult: '.sbct',
      pageContainer: '#viewport'
    }
  }
}

module.exports = new HomePage();
