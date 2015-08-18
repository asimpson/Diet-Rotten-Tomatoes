import React from 'react';
import JSONP from 'browser-jsonp';
import MovieList from './MovieList';
import Search from './Search';
require ("../scss/_normalize.scss");

const key = 'bfsqfcdktj8yt8bvu2d2fzq2'
const apiEndpoint = 'http://api.rottentomatoes.com/api/public/v1.0'
const boxOfficeUrl = `${apiEndpoint}/lists/movies/box_office.json?apikey=${key}&limit=5&country=us`;
const dvdUrl = `${apiEndpoint}/lists/dvds/top_rentals.json?apikey=${key}&limit=5&country=us`;
const searchUrl = `${apiEndpoint}/movies.json?apikey=${key}&limit=5&country=us&q=`; 

class DRT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'dvds': '',
      'boxOffice': '',
      'searchResults': ''
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

  searchMovies (searchText) {
    let url = `${searchUrl}${searchText}`;
    this.fetchMovies(url, "searchResults");
  }

  render () {
    let searchHeading = '';
    if (this.state.searchResults === '' || typeof this.state.searchResults === 'undefined') {
      searchHeading = null;
    } else {
      searchHeading = <h1>Search Results:</h1>;
    }

    return (
      <div className="drt">
        <Search onSearch={e => this.searchMovies(e)}/>
        {searchHeading}
        <MovieList data={this.state.searchResults} />
        <h2>Box Office:</h2>
        <MovieList data={this.state.boxOffice} />
        <h2>DVDs:</h2>
        <MovieList data={this.state.dvds} />
        <div className="credits clear">
          All data provided by <a href="http://www.rottentomatoes.com/" alt="Rotten Tomatoes">Rotten Tomatoes</a>.
        </div>
      </div>
    );
  }
};

React.render(<DRT />, document.getElementById('app'));
