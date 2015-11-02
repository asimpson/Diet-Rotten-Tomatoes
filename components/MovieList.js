import React from 'react';
import Score from './Score';
require('../scss/_movie-list.scss');

const MovieList = (props) => {

  const movies = props.data.map((x, i) => {
    const bg = {
      backgroundImage: `url(${x.posters.detailed})`,
      padding: '1em 1em 1em 0'
    }

    return (
      <div key={i} className="movie">
        <div style={bg}>
          <h1>{x.title}</h1>
          <div className="movie-ratings">
            <Score name='Critics' score={x.ratings.critics_score} />
            <Score name='Audience' score={x.ratings.audience_score} />
          </div>
        </div>
      </div>
    );
  });

  return <div>{movies}</div>;
};

export default MovieList;
