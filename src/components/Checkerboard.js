import React from 'react';

class Checkerboard extends React.Component {

  renderRow(rowIndex, boardSize) {
    let row = [];
    for (let i = 0; i < boardSize; i++) {
      row.push(<div className="square" key={`${rowIndex}-${i}`}></div>);
    }
    let rowClass = `row ${(rowIndex % 2 === 0) ? 'row-even' : 'row-odd'}`;
    return (
      <div className={rowClass} key={`${rowIndex}`}>{row}</div>
    );
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

export default Checkerboard;