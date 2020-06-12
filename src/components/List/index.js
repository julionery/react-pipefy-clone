import React, { useRef, useContext } from 'react';
import { useDrop } from "react-dnd";

import BoardContext from '../Board/context';

import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

function List({data, index: listIndex}) {
  const ref = useRef();
  const { move } = useContext(BoardContext);
  
  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
     const draggedListIndex = item.listIndex;
     const targetListIndex = listIndex;
 
     if(draggedListIndex === targetListIndex && data.cards.length > 0){
       return;
     }

     const draggedIndex = item.index;
     const targetIndex = data.cards.length;
 
     move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
 
     item.index = targetIndex;
     item.listIndex = targetListIndex;
    }
   });

  dropRef(ref);

  return (
    <Container ref={ref} done={ data.done }>
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