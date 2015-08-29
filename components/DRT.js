import React, { Component } from 'react';
import JSONP from 'browser-jsonp';
import MovieList from './MovieList';
import Search from './Search';
import parseURL from 'youarei';
import searchRT from '../actions/actions.js';
import { Provider, connect } from 'react-redux';
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
      'boxOffice': ''
    };
  }

  componentDidMount() {
    this.fetchMovies(boxOfficeUrl, "boxOffice")
    this.fetchMovies(dvdUrl, "dvds")
    let urlParser = new parseURL(window.location.href);

    if (urlParser.query_get().movie) {
      this.searchMovies(urlParser.query_get().movie);
    }
  }

  fetchMovies (url, movieType) {
    JSONP({
      url: url,
      success: (data) => { 
        if (movieType === 'searchResults') {
          this.props.dispatch(searchRT(data.movies.slice(0,5)));
        } else {
          this.setState({[movieType]: data.movies.slice(0,5)});
        }
      }
    });
  }

  searchMovies (searchText) {
    let url = `${searchUrl}${searchText}`;
    this.fetchMovies(url, "searchResults");
  }

  resetSearch () {
    this.setState({["searchResults"]: ''});
  }

  render () {
    let searchHeading = '';
    if (this.state.searchResults === '' || typeof this.state.searchResults === 'undefined') {
      searchHeading = null;
    } else {
      searchHeading = (
        <span>
          <button onClick={() => this.resetSearch()} className="reset">Reset</button>
          <h1>Search Results:</h1>
        </span>
      );
    }

    return (
      <div className="drt">
        <Search onSearch={(e) => this.searchMovies(e)}/>
        {searchHeading}
        <MovieList data={this.props.searched} />
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

// Map Redux state to component props
function mapStateToProps(state)  {
  return {
    searched: state.searched
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onSearch: () => dispatch(actions.SEARH_MOVIES)
  };
}

export default connect(mapStateToProps)(DRT);
