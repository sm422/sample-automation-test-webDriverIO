class Data {
  constructor(){
    this.urls = {
      search: {
        youtube: 'https://google.com/search?q=youtube',
        movies: 'https://google.com/search?q=movies'
      },
      homepage: 'https://google.com'
    }
  }
}

module.exports = new Data();
