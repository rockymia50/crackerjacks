import React from 'react';
import { Button } from 'reactstrap';
import NumericInput from 'react-numeric-input';
import './Header.css';



const Header = props => {
  return(
  <header className="header">
    <h1>Crackerjacks</h1>
    <h3>Your Home for Baseball Lorem Ipsum 
    </h3>
    <form onSubmit={props.generateLorem}>
      <label>Third Base</label>
      <input onChange={props.handleLengthChange} type="radio" name="length" value="3rd Base"/><br/>
      <label>Second Base</label>
      <input onChange={props.handleLengthChange} type="radio" name="length" value="2nd Base"/><br/>
      <label>First Base</label>
      <input onChange={props.handleLengthChange} type="radio" name="length" value="1st Base"/><br/>
      <label>Number of Outs</label>
      {/* <input onChange={props.handleParagraphChange} type="text" pattern="" name="paragraphs" placeholder="3" min="1" max="5"/> */}
      {/* <NumericInput name="paragraphs" valueasnumber={props.handleParagraphChange} min={1} max={7} /> */}
      <NumericInput  className="form-control"  placeholder='3' onChange={props.handleParagraphChange} min={1} max={7}/>
      <Button color="warning" type="submit">Swing</Button>
    </form>

  </header>

  )
  };

export default Header;
