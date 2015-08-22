import React from 'react';
import each from 'lodash/collection/each';
import Score from './Score';
require('../scss/_movie-list.scss');

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let movieObj = [];

    each(this.props.data, (n, key) => {
      let bgStyle = {
        backgroundImage: `url(${n.posters.detailed})`,
        padding: '1em 1em 1em 0'
      };

      movieObj.push(
        <div key={key} className="movie">
          <div style={bgStyle}>
            <h1>{n.title}</h1>
            <div className="movie-ratings">
              <Score name='Critics' score={n.ratings.critics_score} />
              <Score name='Audience' score={n.ratings.audience_score} />
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
