import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import Search from './Search';
import parseURL from 'youarei';
import { fetchMovies, fetchDVD, clearSearch, searchMovies} from '../actions/actions.js';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
require ("../scss/_normalize.scss");

class DRT extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchDVD();
    let urlParser = new parseURL(window.location.href);

    if (urlParser.query_get().movie) {
      this.props.searchMovies(urlParser.query_get().movie);
    }
  }

  render () {
    let searchResults = null;

    if (this.props.searched.length > 0) {
      searchResults = (
        <span>
          <button onClick={() => this.props.clearSearch()} className="reset">Reset</button>
          <h2>Search Results:</h2>
          <MovieList data={this.props.searched} />
        </span>
      );
    }

    return (
      <div className="drt">
        <Search onSearch={(text) => this.props.searchMovies(text)}/>
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

function mapDispatchToProps(dispatch)  {
  return {
    fetchMovies: bindActionCreators(fetchMovies, dispatch),
    fetchDVD: bindActionCreators(fetchDVD, dispatch),
    clearSearch: bindActionCreators(clearSearch, dispatch),
    searchMovies: bindActionCreators(searchMovies, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DRT);
