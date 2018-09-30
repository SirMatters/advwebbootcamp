import React, { Component } from 'react';
import './MemoryGame.css';
import Card from './Card'

const colors = ['red', 'green', 'black', 'lightskyblue', 'blue', 'brown', 'magenta']

const CardStates = {
  HIDDEN: 0,
  SHOWING : 1
}

class MemoryGame extends Component {
  constructor(props) {
    super(props);

    let cards = [
      {id:0, showState: CardStates.HIDDEN, backgroundColor: colors[6]},
      {id:1, showState: CardStates.HIDDEN, backgroundColor: colors[0]},
      {id:2, showState: CardStates.HIDDEN, backgroundColor: colors[0]},
      {id:3, showState: CardStates.HIDDEN, backgroundColor: colors[1]},
      {id:4, showState: CardStates.HIDDEN, backgroundColor: colors[1]},
      {id:5, showState: CardStates.HIDDEN, backgroundColor: colors[2]},
      {id:6, showState: CardStates.HIDDEN, backgroundColor: colors[2]},
      {id:7, showState: CardStates.HIDDEN, backgroundColor: colors[3]},
      {id:8, showState: CardStates.HIDDEN, backgroundColor: colors[3]},
      {id:9, showState: CardStates.HIDDEN, backgroundColor: colors[4]},
      {id:10, showState: CardStates.HIDDEN, backgroundColor: colors[4]},
      {id:13, showState: CardStates.HIDDEN, backgroundColor: colors[5]},
      {id:11, showState: CardStates.HIDDEN, backgroundColor: colors[5]},
      {id:12, showState: CardStates.HIDDEN, backgroundColor: colors[6]}
    ]

    cards = this.shuffle(cards);
    this.state = {cards, chosen: ''};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    let chosen ='';
    let temp = '';

    const changeCardState = (cards, id, newState) => {
      return cards.map(c => {
        if(c.id === id) {
          temp = c.backgroundColor;
          return({...c, showState: newState})
        }
        return c;
      })
    }

    let cards = changeCardState(this.state.cards, id, CardStates.SHOWING)

    if(this.state.chosen === '') {
      chosen = temp;
    } else {
      if(temp === this.state.chosen) {
        cards = cards.map(c => ({...c, showState: CardStates.SHOWING}))
      } else {
        cards = cards.map(c => ({...c, showState: CardStates.HIDDEN}));
        chosen = '';
      }
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
        showState = {c.showState !== CardStates.HIDDEN}
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