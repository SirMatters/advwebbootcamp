import React, { Component } from 'react';
import './App.css';

const cardsNum = 16;

const cardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

const Card = (props) => {
  const style = {
    height: '100px',
    width: '100px',
    backgroundColor: 'grey'
  }
  if(props.showing) {
    style.backgroundColor = props.backgroundColor;
  }
  return (
    <div
      className="card-content"
      style={style}
    />
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    let colors = [
      {state:cardState.HIDING, backgroundColor: 'red'},
      {state:cardState.HIDING, backgroundColor: 'red'},
      {state:cardState.HIDING, backgroundColor: 'blue'},
      {state:cardState.HIDING, backgroundColor: 'blue'}
    ]

    colors = this.shuffle(colors);
    this.state = {colors}
  }

  generateRandomColor() {
    return(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`);
  }

  shuffle(b) {
    const a = b.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i,j], a[j,i]] = [a[j,i], a[i,j]]
    }
    return a;
  }

  render() {
    return (
      <div className="App">
      {this.state.colors}
      </div>
    );
  }
}

export default App;