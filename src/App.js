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
    var cardToFlip = {...this.state.deck[cardIndex]}; //same ast object.assign({}, this.state.deck[cardIndex])
    // If card is already flipped, do nothing
    if (cardToFlip.isFlipped) {
      return; //stop code execution
    }

    //actually flip the card
    cardToFlip.isFlipped = true; //prevents you from unflipping card (untoggled)

    //copy our deck into a new array, but swap out the card we just flipped
    var newDeck = this.state.deck.map((card, index) => {
      if (index === cardIndex) {
        return cardToFlip;
      }
      return card;
    });

    //copy our picked cards array, and also add cardIndex to the end
    var newPickedCards = this.state.pickedCards.concat(cardIndex);

    //If i just picked the second card, compare the two

    if (newPickedCards.length === 2) {
      var card1Index = newPickedCards[0];
      var card2Index = newPickedCards[1];

      var card1 = newDeck[card1Index];
      var card2 = newDeck[card2Index];

      if (card1.symbol !== card2.symbol) {
        setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000); //delay for 1 second (1000ms)
        //or use setTimeout(() => {this.unflipCards(card1Index, card2Index)}, 1000); this uses a callback
      }

      newPickedCards = [];
    }


    this.setState({
      deck: newDeck, //replaces generateDeck() with newDeck
      pickedCards: newPickedCards
    })
  }

  unflipCards(card1Index, card2Index) {
    var card1 = {...this.state.deck[card1Index]};
    var card2 = {...this.state.deck[card2Index]};

    card1.isFlipped = false;
    card2.isFlipped = false;

    var newDeck = this.state.deck.map((card, index) => {
      if (index === card1Index) {
        return card1;
      }
      if (index === card2Index) {
        return card2;
      }
      return card;
    });

    this.setState({
      deck: newDeck
    })
  }

  render() {

    var cardsJSX = this.state.deck.map((card, index) => {
    return <MemoryCard  key = {index} //for react optimization -- need to deal with this - gotcha
                        pickCard={this.pickCard.bind(this, index)}
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
