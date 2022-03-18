import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/classComponents/Counter';
import Counter2 from './components/contentComponents/Counter2';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
      <Counter2 name={"Given name"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

