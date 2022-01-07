import React from 'react';
import styled from 'styled-components';
import {
  FaCheck,
  FaCircle,
  FaHeart,
  FaRadiation,
  FaCaretDown,
  FaCaretLeft,
  FaCaretRight,
  FaCaretUp,
} from 'react-icons/fa';

import './App.css';

const Row = styled.div`
  display: flex;
`;

const IconStack = styled.span`
  display: grid;
  align-items: center;
  justify-items: center;
  svg {
    grid-area: 1/1;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <IconStack>
            <FaCircle color="white" size={24} />
            <FaCheck color="green" size={16} />
          </IconStack>
          <IconStack>
            <FaCircle color="white" size={24} />
            <FaHeart color="red" size={16} />
          </IconStack>
          <IconStack>
            <FaCircle color="white" size={24} />
            <FaCaretDown color="red" size={20} style={{ paddingBottom: 7 }} />
            <FaCaretUp color="green" size={20} style={{ paddingTop: 6 }} />
            <FaCaretLeft color="blue" size={20} style={{ paddingLeft: 6 }} />
            <FaCaretRight
              color="yellow"
              size={20}
              style={{ paddingRight: 6 }}
            />
          </IconStack>
          <IconStack>
            <FaCircle color="yellow" size={24} />
            <FaRadiation color="black" size={20} />
          </IconStack>
        </Row>
      </header>
    </div>
  );
}

export default App;
