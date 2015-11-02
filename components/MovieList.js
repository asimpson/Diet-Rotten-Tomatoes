import React from 'react';
import Score from './Score';
require('../scss/_movie-list.scss');

const MovieList = (props) => {

  const movies = props.data.map((x, i) => {
    let title;

    const bg = {
      backgroundImage: `url(${x.posters.detailed})`,
      padding: '1em 1em 1em 0'
    }

    if (x.alternate_ids) {
      const url = `http://m.imdb.com/title/tt${x.alternate_ids.imdb}`;
      title = (
        <a className="movie-link" href={url}>
          <h1>{x.title}</h1>
        </a>
      );
    } else {
      title = <h1>{x.title}</h1>;
    }
    
    return (
      <div key={i} className="movie">
        <div style={bg}>
          {title}
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
