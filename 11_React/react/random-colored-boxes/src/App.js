import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 100;

const getRandomColor = () => {
  return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}

const createColors = (num) => {
  const colors = [];
  for (let i=0; i<num; i++) {
    const randColor = getRandomColor();
    colors.push(randColor);
  }
  return colors;
}

const colors = createColors(NUM_BOXES);

const Square = ({color}) => {
  const style = {
    backgroundColor : color,
    width : '10px',
    height : '10px'
  }
  return (
    <div style={style}></div>
  )
}

const Pano = ({colors}) => {
  const boxes = colors.map((color, i) => (
    <Square
      key={i}
      color={color}
    />
  ));
  return (
    <div className='Pano'>
      {boxes}
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {colors};

    setInterval(() => {
      const colors = this.state.colors.slice();
      const boxIndex = Math.floor(Math.random()*colors.length);
      colors[boxIndex] = 'rgb(100, 100, 100)';
      this.setState({colors})
    }, 1);
  }
  
  render() {
    return (
      <div className="App">
        <Pano colors = {this.state.colors}/>
      </div>
    );
  }
}

export default App;
