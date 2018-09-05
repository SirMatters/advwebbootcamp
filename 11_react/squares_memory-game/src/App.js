import React, { Component } from 'react';
import './App.css';

const squaresNum = 8;

const Square = (props) => {
  const style = {
    backgroundColor: props.color,
    width: '100px',
    height: '100px'
  }
  return(
    <div
      className='square'
      style={style}
      onClick={(e)=>{console.log(e.target.style.backgroundColor)}}
    >
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: Array(squaresNum).fill().map(this.generateRandomColor),
      isFinished: false,
      clicked: ''
    }
  }

  generateRandomColor() {
    return(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`);
  }

  shuffle(a) {
    let j, i, k;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        k = a[i, j];
        a[i, j] = a[j, i];
        a[j, i] = k;
    }
    return a;
}

  render() {
    const firstRow = this.state.colors.map((col, ind) => (
      <Square color={col} key={ind}/>
    ))
    return (
      <div className="App">
        <div id='first-row'>
          {firstRow}
        </div>
        <div id='second-row'>
          {this.shuffle(firstRow.slice())}
        </div>
      </div>
    );
  }
}

export default App;