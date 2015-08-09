import React from 'react';
import each from 'lodash/collection/each';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let movieObj = [];

    each(this.props.data, (n, key) => {
      console.log(n);
      let altText = `Poster for ${n.title}`;
      movieObj.push(
        <div key={key} className="movie">
          <h1>{n.title}</h1>
          <img src={n.posters.detailed} alt={altText} />
          <div class="critics-score">{n.ratings.critics_score}</div>
          <div class="audience-score">{n.ratings.audience_score}</div>
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
