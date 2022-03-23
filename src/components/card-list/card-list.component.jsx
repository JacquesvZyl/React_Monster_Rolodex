import { Component } from 'react';
import './card-list.styles.css';
import CardContainer from '../card-container/card-container.component';

class CardList extends Component {
  constructor() {
    super();
  }

  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <CardContainer key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
