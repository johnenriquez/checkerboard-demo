import React from 'react';

class Checkerboard extends React.Component {
  constructor(props) {
    super(props);
    this.places = this.setUpPieces();
  }

  setUpPieces() {
    // this is a meta-board
    let places = [];
    let boardSize = this.props.size;

    // player 2 is "1" while player 1 is "0"
    let player2row = new Array(boardSize).fill(1);
    let player1row = new Array(boardSize).fill(0);
    let emptyRow = new Array(boardSize).fill(null);

    // now fill the rows
    for (let row = 0; row < boardSize; row++) {
      // player 2 is the top two rows
      // player 1 is the bottom two rows
      if (row === 0 || row === 1) {
        places.push(player2row);
      } else if (row === boardSize-2 || row === boardSize-1) {
        places.push(player1row);
      } else {
        places.push(emptyRow);
      }
    }
    
    return places;
  }

  renderRow(rowIndex, boardSize) {
    let row = [];

    // add `boardSize` number of squares to the row 
    for (let j = 0; j < boardSize; j++) {
      let piece = this.board[rowIndex][j];
      let square = <div className="square" key={`${rowIndex}-${j}`}>{piece}</div>;
      row.push(square);
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