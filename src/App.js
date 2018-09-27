import React from "react";
import {Words} from "./components/Words/Words.js";


const Lorem = require('react-lorem-component');
 
 const App = () => (
      <div>
        <h1>Lorem Ipsum</h1>
        <Lorem words={"words"}/>
        <Words/>
      </div>
    );

    
export default App;
