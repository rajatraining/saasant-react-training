import React from 'react';
import './style.css'
import styled from 'styled-components';

// Styled Component
const Para = styled.p`
color: blue;

`

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #1a202c;
  padding: 8px;
  min-width: 64px;

  background: transparent;

  transition: all 0.1s ease-in;

  &:hover {
    background: #1a202c;
    color: #ffffff;
  }
`;


function ReactCss() {
  const [fruits, setFruits] = React.useState([
    { id: '1', name: 'Apple', isFavorite: false },
    { id: '2', name: 'Peach', isFavorite: true },
    { id: '3', name: 'Strawberry', isFavorite: false },
  ]);

  function handleClick(item) {
    const newFruits = fruits.map((fruit) => {
      if (fruit.id === item.id) {
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: !fruit.isFavorite,
        };
      } else {
        return fruit;
      }
    });

    setFruits(newFruits);
  }

  return (
    <div>
      <h3><Para>This is Paragraph</Para></h3>

    <p style={{color:"green"}}> This is Paragraph</p>


    <div className='myStyle'> This needs to be styled ..!</div>
      <Basket items={fruits} onClick={handleClick} />
    </div>
  );
}

function Basket({ items, onClick }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button type="button" onClick={() => onClick(item)} className="button">
            {item.isFavorite ? 'Unlike' : 'Like'}
          </button>
          <Button onClick={() => onClick(item)} >  {item.isFavorite ? 'Unlike' : 'Like'} </Button>
        </li>
      ))}
    </ul>
  );
}

export default ReactCss;