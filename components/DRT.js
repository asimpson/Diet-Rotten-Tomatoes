import React from 'react';
import JSONP from 'browser-jsonp';
import MovieList from './MovieList';
import Search from './Search';

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
    return (
      <div>
        <Search onSearch={e => this.searchMovies(e)}/>
        <MovieList data={this.state.searchResults} />
        <MovieList data={this.state.boxOffice} />
        <MovieList data={this.state.dvds} />
      </div>
    );
  }
};

React.render(<DRT />, document.getElementById('app'));
