import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSONP from 'browser-jsonp';
import MovieList from './MovieList';
import Search from './Search';
import parseURL from 'youarei';
import { searchRT, fetchBoxOffice, fetchDVD, clearSearch } from '../actions/actions.js';
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
  }

  componentDidMount() {
    this.fetchMovies(boxOfficeUrl, "boxOffice");
    this.fetchMovies(dvdUrl, "dvds");
    let urlParser = new parseURL(window.location.href);

    if (urlParser.query_get().movie) {
      this.searchMovies(urlParser.query_get().movie);
    }
  }

  fetchMovies (url, movieType) {
    JSONP({
      url: url,
      success: (data) => { 
        switch (movieType) {
          case "searchResults":
            return this.props.dispatch(searchRT(data.movies.slice(0,5)));
          case "boxOffice":
            return this.props.dispatch(fetchBoxOffice(data.movies.slice(0,5)));
          case "dvds":
            return this.props.dispatch(fetchDVD(data.movies.slice(0,5)));
          default:
            return data.movies;
        }
      }
    });
  }

  searchMovies (searchText) {
    let url = `${searchUrl}${searchText}`;
    this.fetchMovies(url, "searchResults");
  }

  render () {
    let searchResults = null;

    if (this.props.searched.length > 0) {
      searchResults = (
        <span>
          <button onClick={() => this.props.dispatch(clearSearch())} className="reset">Reset</button>
          <h2>Search Results:</h2>
          <MovieList data={this.props.searched} />
        </span>
      );
    }

    return (
      <div className="drt">
        <Search onSearch={(e) => this.searchMovies(e)}/>
        {searchResults}
        <h2>Box Office:</h2>
        <MovieList data={this.props.boxOffice} />
        <h2>DVDs:</h2>
        <MovieList data={this.props.dvd} />
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
    searched: state.searched,
    boxOffice: state.boxoffice,
    dvd: state.dvd
  };
}

export default connect(mapStateToProps)(DRT);
