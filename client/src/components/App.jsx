import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [['Winnie', '#8E6E95', ['test1', 'test2']], ['Bob','#39A59C', ['test1', 'test2']], ['Thomas','#344759', ['test1', 'test2']], ['George','#E8741E', ['test1', 'test2']]]
    };

    this.addCard = this.addCard.bind(this);
    this.pushLeft = this.pushLeft.bind(this);
    this.pushRight = this.pushRight.bind(this);
  }

  addCard(e, id) {
    let card = window.prompt('Card text: ');
    this.setState(state => {
      let newBoards = state.boards;
      newBoards[id][2].push(card)
      return newBoards;
    });
  }

  pushRight(start, textId){
    this.setState(state => {
      let newBoards = state.boards.slice();
      let stored = newBoards[start][2][textId];
      newBoards[start][2].splice(textId, 1);
      newBoards[start + 1][2].push(stored);
      return newBoards;
    });
  }

  pushLeft(start, textId) {
    this.setState(state => {
      let newBoards = state.boards.slice();
      let stored = newBoards[start][2][textId];
      newBoards[start][2].splice(textId, 1);
      newBoards[start - 1][2].push(stored);
      return newBoards;
    });
  }

  render() {
    return (
      <div className='container'>
        {this.state.boards.map((name, i, a) => <Board key={i} pushLeft={this.pushLeft} pushRight={this.pushRight} addCard={this.addCard} id={i} name={name[0]} color={name[1]} cards={name[2]} type={i === 0 ? 'first' : i === a.length - 1 ? 'last' : 'mid'}/>)}
      </div>
    );
  }
}

export default App;