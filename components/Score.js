import React from 'react';

const Score = (props) => {
    const scoreStyle = {
      color: (props.score < 50) ? '#07FF07' : 'red'
    };

    return (
      <div>
        <span className="score-title">{props.name}: </span>
        <span className="score" style={scoreStyle}>{props.score}</span>
      </div>
    );
}

export default Score;
