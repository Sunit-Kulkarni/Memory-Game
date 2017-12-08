import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js'

function generateDeck() {
  var symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  var deck = [];

  for (var i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false, 
      symbol: symbols[i%8]
    });
  }
  shuffle(deck);
  return deck;
}

function shuffle(a) {//copied from stack overflow
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    };
  }

  pickCard(cardIndex) {
    console.log(cardIndex);
  }

  render() {

    var cardsJSX = this.state.deck.map((card, index) => {
    return <MemoryCard  pickCard={this.pickCard.bind(this, index)}
                        symbol={card.symbol} 
                        isFlipped={card.isFlipped} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h1 className="App-sub-title">Match Cards to Win</h1>
        </header>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        
        <div>
          {cardsJSX.slice(4,8)}
        </div>

        <div>
          {cardsJSX.slice(8,12)}
        </div>

        <div>
          {cardsJSX.slice(12,16)}
        </div>

      </div>
    );
  }
}

export default App;
