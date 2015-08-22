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
      let criticsStyle = {
        color: (n.ratings.critics_score < 50) ? '#07FF07' : 'red'
      };
      let audienceStyle = {
        color: (n.ratings.audience_score < 50) ? '#07FF07' : 'red'
      };
      let bgStyle = {
        backgroundImage: `url(${n.posters.detailed})`,
        padding: '1em 1em 1em 0'
      };

      movieObj.push(
        <div key={key} className="movie">
          <div style={bgStyle}>
            <h1>{n.title}</h1>
            <div className="movie-ratings">
              <div className="critics-score">
                <span className="score-title">Critics: </span>
                <span className="score" style={criticsStyle}>{n.ratings.critics_score}</span>
              </div>
              <div className="audience-score">
                <span className="score-title">Audience: </span>
                <span className="score" style={audienceStyle}>{n.ratings.audience_score}</span>
              </div>
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
