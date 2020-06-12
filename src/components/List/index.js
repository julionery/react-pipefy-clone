import React from 'react';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

function List({data, index: listIndex}) {
  return (
    <Container done={ data.done }>
      <header>
        <div>
          <h2>{data.title}</h2>
          <span className="pp-cards-count">{ data.cards.length } { data.cards.length === 1 ? "card" : "cards" }</span>
        </div>
        {
          data.creatable && (
            <button type="button">
              <MdAdd size={24} color="#FFF" />
            </button>
          )
        }
      </header>

      <ul>
        { data.cards.map((card, index ) => (
          <Card 
            key={card.id} 
            listIndex={listIndex}
            index={index} 
            data={card}
          />
        ))}
      </ul>

    </Container>
  );
}

export default List;