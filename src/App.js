import React, { Component } from "react";
import Header from './components/Header';
import { Container,Row, Col,Jumbotron } from 'reactstrap';
import Words from '/Users/rogermcintosh/crackerjacks/src/components/Words/Words.js';




const Lorem = require('react-lorem-component');

class App extends Component {
    state = {
      numericInput:'3',
      length: "3rd Base"
      
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

    generateLorem = (event) => {
        event.preventDefault();
        console.log(this.state);
        console.log(this.generateLorem);
    }

      
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
            
                <Jumbotron >
                    <Container>
                        <Row>
                            <Col>
                                <h1>Lorem Ipsum</h1>
                                <Words/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
      }
    }
    

export default App;
