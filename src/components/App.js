import React from 'react';
import '../styles/styles.css';

import Checkerboard from './Checkerboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 8
    }
    this.updateBoardSize = this.updateBoardSize.bind(this);
  }

  updateBoardSize(e) {
    this.setState({ size: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <input
          type="number"
          value={this.state.size}
          onChange={this.updateBoardSize}
        />
        <Checkerboard size={this.state.size} />
      </div>
    );
  }
}

export default App;
