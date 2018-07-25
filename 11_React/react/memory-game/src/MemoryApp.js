import React, { Component } from 'react';
import TilesPano from './TilesPano';
import NavBar from './NavBar';
import './App.css';

class App extends Component {

  static colors = [
    '#161df0', '#a1f083', '#c71536', '#0de02e',
     '#cc0f9c', '#8d8584', '#544db8', '#c8a479'
  ]
  constructor(props) {
    super(props);
    
    const firstRow = this.generateTileRows(App.colors).firstRow.map((color, id) => (
      {
        id: `a${id}`,
        color: color
      }
    ));

    const secondRow = this.generateTileRows(App.colors).secondRow.map((color, id) => (
      {
        id: `b${id}`,
        color: color
      }
    ));

    this.state = {
      firstRow,
      secondRow
    }
    this.newGame = this.newGame.bind(this);
  }

  shuffleArray(arr) {
    const array = arr.slice();
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }

  generateTileRows(colorArr) {
    const firstRow = this.shuffleArray(colorArr);
    const secondRow = this.shuffleArray(colorArr);
    return({firstRow, secondRow})
  }

  newGame() {
  }

  render() {
    return (
      <div className="memory-game">
        <NavBar />
        <TilesPano 
          firstRow={this.state.firstRow}
          secondRow={this.state.secondRow}
        />
      </div>
    );
  }
}

export default App;
