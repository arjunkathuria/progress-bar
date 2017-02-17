import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page';

function HelloWorld() {
  console.log('wassssuppppp');
  return ( <p> Hello React! </p> );
}

ReactDOM.render(<Page />, document.getElementById('app'));