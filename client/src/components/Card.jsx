import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <li id='card'>
        {this.props.type === 'mid' || this.props.type === 'last' ? <div id='push-left' onClick={() => this.props.pushLeft(this.props.id, this.props.textId)}>{'<'}</div> : null}
        {this.props.text}
        {this.props.type === 'mid' || this.props.type === 'first' ? <div id='push-right' onClick={() => this.props.pushRight(this.props.id, this.props.textId)}>{'>'}</div> : null}
      </li>
    );
  }
}

export default Card;