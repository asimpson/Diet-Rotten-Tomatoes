import React from 'react';

export default class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let scoreStyle = {
      color: (this.props.score < 50) ? '#07FF07' : 'red'
    };

    return (
      <div>
        <span className="score-title">{this.props.name}: </span>
        <span className="score" style={scoreStyle}>{this.props.score}</span>
      </div>
    );
  }
}
