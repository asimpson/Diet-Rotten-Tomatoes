import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  parseSearch (e) {
    e.preventDefault();
    let text = React.findDOMNode(this.refs.searchBox).value;
    this.props.onSearch(text);
  };

  render () {
    return (
      <form onSubmit={e => this.parseSearch(e)} >
        <label htmlFor="movie-search">Search</label>
        <input ref="searchBox" reftype="search" name="movie-search" />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
