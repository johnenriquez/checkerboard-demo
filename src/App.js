import React from 'react';
import './styles.css';


class Checkerboard extends React.Component {

  renderRow(rowIndex, boardSize) {
    let row = [];
    for (let i = 0; i < boardSize; i++) {
      row.push(<div className="square"></div>);
    }
    if (rowIndex % 2 === 0) {
      return (
        <div class="row row-even">{row}</div>
      );
    } else {
      return (
        <div className="row row-odd">{row}</div>
      );
    }
  }

  render() {
    let boardSize = this.props.size;
    let checkerboard = [];
    for (let i = 0; i < boardSize; i++) {
      checkerboard.push(this.renderRow(i, boardSize));
    }
    return (
      <div id="checkerboard">{checkerboard}</div>
    );
  }
}

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
