import React from "react";
import Header from "./components/Header";


const Lorem = require('react-lorem-component');
 
 const App = () => (
     <div>
         <div>
         <Header/>
         </div>

      <div>
        <h1>Lorem Ipsum</h1>
        <Lorem words={['ball', 'cap', 'bat', 'batter', 'bunt','coach','curve','HammerinHank','Old Pete','Smokey','Dubble Bubble','Sunflower Seeds','Here Batter Batter','Your Out','Sparky','Peanuts','Cracker Jacks','Hank Aaron', 'Max Scherzer', 'Justin Verlander', 'Houston Astros', 'New York Yankees', 'Boston Red Soxs', 'Chicago Cubs','Old Aches and Pains','Babe Ruth', 'Whitey', 'Mr. Cub', 'dugout', 'fence', 'field', 'umpire', 'first baseman', 'foul', 'foul line', 'splitter', 'glove', 'minor league', 'pitch', 'pitcher', 'right fielder', 'run', 'runner', 'RBI', 'steal', 'basemans', 'World Series', 'throw','walk','lorem', 'ipsum', 'dolor', 'stars', 'stripes' ]}/>
       
      </div>
      </div>
    );

    
export default App;
