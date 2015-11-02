import React from 'react';
import ReactDOM from 'react-dom';
require ("../scss/_search-box.scss");

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  parseSearch (e) {
    e.preventDefault();
    let text = ReactDOM.findDOMNode(this.refs.searchBox).value;
    this.props.onSearch(text);
  };

  render () {
    return (
      <form onSubmit={(e) => this.parseSearch(e)} >
        <label htmlFor="movie-search">Search</label>
        <div className="side-by-side--wrapper" >
          <input placeholder="Search" ref="searchBox" type="search" name="movie-search" className="search-input side-by-side side-by-side--major"/>
          <span className="side-by-side side-by-side--minor">
            <input type="submit" value="Search" className="search-button "/>
          </span>
        </div>
      </form>
    );
  }
}
