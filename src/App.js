import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Selfie from "./components/Selfie";
import Nav from "./components/Nav";
import portraits from "./portraits.json";


class App extends Component {
  //set initial state
state ={
  portraits,
  clickedportraits:[],
    score: 0 ,
    topScore: 0,
    message: ""
}
//when the page mounts execute the shuffle array function
componentDidMount() {
  this.setState(
    {portraits:this.shuffleArray(this.state.portraits)}
    );
};
//shuffle function
shuffleArray = array => {
  for(let j = array.length -1; j>0;j--) {
    const k = Math.floor(Math.random()*(j+1));
    [array[j], array[k]] = [array[k],array[j]]
  }
  return array;
}
//check array function to see if portrait is selected already

//on click check to see if already clicked if no move to clicked portraits and ++score
//if yes you lose clear clicked portraits and reset game


render() {
  return (
    <Wrapper>
      <Nav></Nav>
      <Title>Remember Rembrandt</Title>
      {this.state.portraits.map(portrait=> (
        <Selfie
        setClicked={this.setClicked}
        id={portrait.id}
        image={portrait.image}
        />
      ))
      }
    </Wrapper>
  );
}
}

export default App;
