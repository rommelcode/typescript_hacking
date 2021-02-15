import * as React from 'react';
import { render } from 'react-dom';
import Person from './Person';
import TestComponentNew from './testcomp';

import './styles.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Person />
      <TestComponentNew name="Garry" age="40" />,
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
