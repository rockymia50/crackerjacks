import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Jumbotron.css'


const mainContent = (props) => {
  return (
    <div>
      <Jumbotron className="jumbotron">
        <div>
           <span onClick={props.generateLorem} />
        </div>             
      </Jumbotron>
    </div>
  );
};

export default mainContent;