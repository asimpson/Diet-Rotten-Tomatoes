import React from 'react';
import JSONP from 'browser-jsonp';

const key = 'bfsqfcdktj8yt8bvu2d2fzq2'
const apiEndpoint = 'http://api.rottentomatoes.com/api/public/v1.0'
const boxOfficeUrl = `${apiEndpoint}/lists/movies/box_office.json?apikey=${key}&limit=5&country=us`;
const dvdUrl = `${apiEndpoint}/lists/dvds/top_rentals.json?apikey=${key}&limit=5&country=us`;
//search - movies.json?apikey=bfsqfcdktj8yt8bvu2d2fzq2&page_limit=5&q=" + searched + "&callback=?"

class DRT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'dvds': '',
      'boxOffice': ''
    };
  }

  componentDidMount() {
    this.fetchMovies(boxOfficeUrl, "boxOffice")
    this.fetchMovies(dvdUrl, "dvds")
  }

  fetchMovies (url, movieType) {
    JSONP({
      url: url,
      success: (data) => { 
        this.setState({[movieType]: data.movies});
      }
    });
  }

  render () {
    console.log(this.state);
    return <span>You did React!</span>
  }
};

React.render(<DRT />, document.getElementById('app'));
