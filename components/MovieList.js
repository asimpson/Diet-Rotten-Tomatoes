import React from 'react';
import each from 'lodash/collection/each';
require('../scss/_movie-list.scss');

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let movieObj = [];

    each(this.props.data, (n, key) => {
      let altText = `Poster for ${n.title}`;
      let bgStyle = {
        backgroundImage: `url(${n.posters.detailed})`
      };

      movieObj.push(
        <div key={key} className="movie">
          <div style={bgStyle}>
            <h1>{n.title}</h1>
            <div className="movie-ratings">
              <div className="critics-score">Critics: {n.ratings.critics_score}</div>
              <div className="audience-score">Audience: {n.ratings.audience_score}</div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {movieObj}
      </div>
    );
  }
}
