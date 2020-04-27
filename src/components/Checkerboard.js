import React from 'react';

class Checkerboard extends React.Component {

  renderRow(rowIndex, boardSize) {
    let row = [];

    // add `boardSize` number of squares to the row 
    for (let i = 0; i < boardSize; i++) {
      row.push(<div className="square" key={`${rowIndex}-${i}`}></div>);
    }

    // designate whether row is even or odd for CSS
    let rowClass = `row ${(rowIndex % 2 === 0) ? 'row-even' : 'row-odd'}`;

    // render it
    return (
      <div className={rowClass} key={`${rowIndex}`}>{row}</div>
    );
  }

  render() {
    // size specified via props
    let boardSize = this.props.size;

    // add specified # of rows
    let checkerboard = [];
    for (let i = 0; i < boardSize; i++) {
      checkerboard.push(this.renderRow(i, boardSize));
    }

    // render it
    return (
      <div id="checkerboard">{checkerboard}</div>
    );
  }
}

export default Checkerboard;