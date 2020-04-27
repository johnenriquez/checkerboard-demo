import React from 'react';
import './styles.css';

class Checkerboard extends React.Component {
  render() {
    return (
      <div id="checkerboard">
        <div class="row">
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
        </div>
        <div class="row">
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
        </div>
        <div class="row">
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
        </div>
        <div class="row">
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
        </div>
        <div class="row">
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
        </div>
        <div class="row">
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
        </div>
        <div class="row">
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
        </div>
        <div class="row">
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
          <div class="white_square"></div>
          <div class="black_square"></div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Checkerboard size="8" />
    </div>
  );
}

export default App;
