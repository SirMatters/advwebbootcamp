import React, { Component } from 'react';
import './ColoredSquares.css';

const ColoredSquare = props => {
  const dim = `${Math.floor(100/App.squaresNumber)*3}vw`;
  const style = {
    backgroundColor: props.color,
    width: dim,
    height: dim
  }
  return (
    <div className='colored-square' style={style}></div>
  )
}

class App extends Component {

  static squaresNumber = 24;

  constructor(props) {
    super(props)
    this.state = {
      squares: this.createSquares()
    }

    setInterval(this.randomColorChange.bind(this), 100);

  }

  assignRandomColor() {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
  }

  createSquares() {
    const squares = [];
    for (let i=0; i < App.squaresNumber; i++) {
      squares.push(this.assignRandomColor())
    }
    return squares
  }

  randomColorChange() {
    const randomSquare = Math.floor(Math.random()*this.state.squares.length);
    const squares = this.state.squares.slice();
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