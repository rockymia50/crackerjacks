import React, { Component } from "react";
import Header from './components/Header';
import MainContent from '/Users/rogermcintosh/crackerjacks/src/components/MainContent/MainContent.js';
import Words from '/Users/rogermcintosh/crackerjacks/src/components/Words/Words.js';
import data from './data.json'
// const Lorem = require('react-lorem-component');


class App extends Component {
    state = {
      numericInput:'3',
      length: "3rd Base",
      data
      
    };

    handleLengthChange = (event) => {
        this.setState({
            length: event.target.value
        });
    }

    handleParagraphChange = (value) => {
            this.setState({
            numericInput: value
            });
    }

    generateLorem = (event,value) => {
        // const data = 
        event.preventDefault();
        this.setState({data});
        console.log(this.state);
        
        };
            
       
        // setupGame: function() {
        //     // Here we pick a random word.
        //     var objKeys = Object.keys(this.wordsToPick);
        //     this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

      
    //     getDefaultProps: function() {
    //       return {
    //         mode:     'paragraphs',
    //         format:   'html',
    //         count:    5,
    //         seed:     0,
    //         ordered:  false
    //       };
    //     },
      
    //     render: function() {
    //       var props = extend({}, this.props, {
    //         units:  'paragraphs',
    //         Lorem: {words}
    //       });
      
    //       random.seed(props.seed);
      
    //       var html = loremIpsum(props);
    //       var wrapper;
      
        
      
    //       // own props
    //       delete props.mode;
    //       delete props.ordered;
    //       delete props.random;
      
    //       // props passed to seedable-random
    //       delete props.seed;
      
    //       // props passed to lorem-ipsum
    //       delete props.count;
    //       delete props.units;
    //       delete props.sentenceLowerBound;
    //       delete props.sentenceUpperBound;
    //       delete props.paragraphLowerBound;
    //       delete props.paragraphUpperBound;
    //       delete props.format;
    //       delete props.words;
    //       delete props.suffix;
      
    //       return wrapper(props);
    //     }
    //   });
      
    //   module.exports = Lorem;  

    render() {
        return (
            <div>
                <div>

                    <Header 
                        handleLengthChange={this.handleLengthChange} 
                        handleParagraphChange={this.handleParagraphChange}
                        stateData={this.state} 
                        generateLorem={this.generateLorem}
                    />
                </div>
                <MainContent
                numericInput={this.state.numericInput}
                length={this.state.length}
                words={data}
                />
                
            </div>
        );
      }
    }
    

export default App;
