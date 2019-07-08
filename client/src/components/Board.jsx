import React from 'react';
import Card from './Card.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <div id='board'>
        <div id='header' style={{ backgroundColor: this.props.color}}>{this.props.name}</div>
        <ul id='cards'>
          {this.props.cards.map((card, i) => <Card id={this.props.id} text={card} textId={i} key={`${card}${i}`} type={this.props.type} pushLeft={this.props.pushLeft} pushRight={this.props.pushRight}/>)}
        </ul>
        <div id='add' onClick={(e) => this.props.addCard(e, this.props.id)}>Add a card</div>
      </div>
    );
  }
}

export default Board;