import React, { Component } from 'react';
import './App.css';

const squaresNum = 10;

class Square extends Component {
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: colors,
      isFinished: false,
      clicked: ''
    }
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
      </div>
    );
  }
}

export default App;