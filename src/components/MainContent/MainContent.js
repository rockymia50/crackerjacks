import React from 'react';
import { Jumbotron } from 'reactstrap';
import Words from '/Users/rogermcintosh/crackerjacks/src/components/Words/Words.js';
import './MainContent.css'


const MainContent = (props) => {

  
  //taking in the props from words and header js
  return (
    <div>
      <Jumbotron className="jumbotron">
        <Words 
        words={props.words} 
        numericInput={props.numericInput}
        length={props.length}
        />           
      </Jumbotron>
    </div>
  );
};

export default MainContent;