import React from 'react';

const BoardPiece = ({ color, shape }) => {
    // color === 0 for player 1
    // color === 1 for player 2
    // shape will be determined by radio button
    let pieceClass = `piece ${(color === 0) ? 'player1' : 'player2'}`
    return (
        <div className={pieceClass}></div>
    );
}

export default BoardPiece;