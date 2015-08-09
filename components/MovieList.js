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
      movieObj.push(
        <div key={key} className="movie">
          <div class="movie">
            <h1>{n.title}</h1>
            <img src={n.posters.detailed} alt={altText} />
          </div>
          <div class="ratings">
            <span class="critics-rating">{n.ratings.critics_rating}</span>
            <span class="critics-score">{n.ratings.critics_score}</span>
            <span class="audience-score">{n.ratings.audience_score}</span>
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
