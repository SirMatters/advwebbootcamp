import React, { Component } from 'react';
import Tile from './Tile';
import './TilesPano.css';

class TilesPano extends Component {
  render() {
    const {firstRow, secondRow} = this.props
    const upperTiles = firstRow.map((tile) =>(
      <Tile key={tile.id} color={tile.color} />
    ))
    const bottomTiles = secondRow.map((tile) =>(
      <Tile key={tile.id} color={tile.color} />
    ))
    return(
      <div className='tiles-pano'>
        <div className='tiles-row'>
          {upperTiles}
        </div>
        <div className='tiles-row'>
          {bottomTiles}
        </div>
      </div>
    )
  }
}

export default TilesPano;
// sends color and methods to tiles