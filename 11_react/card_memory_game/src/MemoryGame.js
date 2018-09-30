import React, { Component } from 'react';
import './MemoryGame.css';
import Card from './Card'

const colors = ['red', 'green', 'black', 'lightskyblue', 'blue', 'brown', 'magenta']

class MemoryGame extends Component {
  constructor(props) {
    super(props);

    let cards = [
      {id:0, showState: false, backgroundColor: colors[6]},
      {id:1, showState: false, backgroundColor: colors[0]},
      {id:2, showState: false, backgroundColor: colors[0]},
      {id:3, showState: false, backgroundColor: colors[1]},
      {id:4, showState: false, backgroundColor: colors[1]},
      {id:5, showState: false, backgroundColor: colors[2]},
      {id:6, showState: false, backgroundColor: colors[2]},
      {id:7, showState: false, backgroundColor: colors[3]},
      {id:8, showState: false, backgroundColor: colors[3]},
      {id:9, showState: false, backgroundColor: colors[4]},
      {id:10, showState: false, backgroundColor: colors[4]},
      {id:13, showState: false, backgroundColor: colors[5]},
      {id:11, showState: false, backgroundColor: colors[5]},
      {id:12, showState: false, backgroundColor: colors[6]}
    ]

    cards = this.shuffle(cards);
    this.state = {cards, chosen: '', noClick: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    let chosen, temp, cards;

    const toggleCardState = (cards, id) => {
      if (true) {
        return cards.map(c => {
          if(c.id === id) {
            temp = c.backgroundColor;
            console.log(temp, !c.showState)
            return({...c, showState: !c.showState})
          }
          return c;
        })
      }
    }

    if (this.state.cards.some(c => (id === c.id && c.showState === false))) {
      cards = toggleCardState(this.state.cards, id)
      if(this.state.chosen === '') {
        chosen = temp;
      } else {
        if(temp === this.state.chosen) {
          cards = cards.map(c => ({...c, showState: true}))
        } else {
          cards = cards.map(c => ({...c, showState: false}));
          chosen = '';
        }
      }
    } else {
      cards = toggleCardState(this.state.cards, id)
    }
    this.setState({cards, chosen});
  }

  shuffle(a) {
    let j, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a;
  }

  render() {
    const cards = this.state.cards.map(c => (
      <Card
        key = {c.id}
        showState = {c.showState}
        backgroundColor = {c.backgroundColor}
        onClick={() => this.handleClick(c.id)}
      />
    ));

    return (
      <div className="MemoryGame">
      {cards}
      </div>
    );
  }
}

export default MemoryGame;