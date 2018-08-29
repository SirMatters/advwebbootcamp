import React, { Component } from 'react';
import './ColoredSquares.css';

const squaresNumber = 24;
const rowsNumber = 3;

const ColoredSquare = ({color}) => {
  const dim = `${100*rowsNumber/squaresNumber}vw`;
  console.log(rowsNumber);
  const style = {
    backgroundColor: color,
    width: dim,
    height: dim
  }
  return (
    <div className='colored-square' style={style}></div>
  )
}

class App extends Component {

  constructor(props) {
    super(props);
    const squares = Array(squaresNumber).fill().map(this.assignRandomColor, this);
    this.state = {squares}

    setInterval(this.randomColorChange.bind(this), 100);

  }

  assignRandomColor() {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
  }

  // createSquares() {
  //   const squares = [];
  //   for (let i=0; i < squaresNumber; i++) {
  //     squares.push(this.assignRandomColor())
  //   }
  //   return squares
  // }

  randomColorChange() {
    const squares = this.state.squares.slice();
    const randomSquare = Math.floor(Math.random()*squares.length);
    squares[randomSquare] = this.assignRandomColor();
    this.setState({squares});
  }

  render() {
    const squares = this.state.squares.map((col, ind) => (
      <ColoredSquare
        key={ind}
        color={col}
      />
    ))
    return (
      <div className="App">
        {squares}
      </div>
    );
  }
}

export default App;