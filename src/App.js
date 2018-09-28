import React, { Component } from "react";
import Header from "./components/Header";
import { Container,Row, Col,Jumbotron } from 'reactstrap';




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
    }


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
            
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Lorem Ipsum</h1>
                                <Lorem words={['ball', 'cap', 'bat', 'batter', 'bunt','coach','curve','HammerinHank','Old Pete','Smokey','Dubble Bubble','Sunflower Seeds','Here Batter Batter','Your Out','Sparky','Peanuts','Cracker Jacks','Hank Aaron', 'Max Scherzer', 'Justin Verlander', 'Houston Astros', 'New York Yankees', 'Boston Red Soxs', 'Chicago Cubs','Old Aches and Pains','Babe Ruth', 'Whitey', 'Mr. Cub', 'dugout', 'fence', 'field', 'umpire', 'first baseman', 'foul', 'foul line', 'splitter', 'glove', 'minor league', 'pitch', 'pitcher', 'right fielder', 'run', 'runner', 'RBI', 'steal', 'basemans', 'World Series', 'throw','walk','lorem', 'ipsum', 'dolor', 'stars', 'stripes' ]}/>   
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
      }
    }
    

export default App;
