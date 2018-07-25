import React, { Component } from 'react';

class Tile extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    const {color, isShown} = this.props;
    const style = {
      width: '200px',
      height: '200px',
      backgroundColor: isShown ? color : 'grey',
      borderRadius: '20px'
    }
    return (
      <div className='tile' style={style}>
      </div>
    )
  }
}

export default Tile;
// gets color from props