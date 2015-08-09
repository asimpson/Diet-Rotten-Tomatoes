import React from 'react';

class Comp extends React.Component {
  render () {
    return <span>You did React!</span>
  }
};

React.render(<Comp />, document.getElementById('app'));
