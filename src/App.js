import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Selfie from "./components/Selfie";
import Nav from "./components/Nav";
import portraits from "./portraits.json";


class App extends Component {yar
  //set initial state
  state = {
    portraits,
    score: 0,
    topScore: 0,
    message: "Click one of Rembrandt's self portraits to begin",
    clickedPortraitIds: []
  }
  //when the page mounts execute the shuffle array function
  componentDidMount() {
    this.setState(
      { portraits: this.shuffleArray(this.state.portraits) }
    );
  };
  //shuffle function
  shuffleArray = array => {
    for (let j = array.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [array[j], array[k]] = [array[k], array[j]]
    }
    return array;
  }
  //function for checking for topScore actually only called once
  checkScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score,
        message: "You have the top score!",
        score: 0,
        clickedPortraitIds: [],
        portraits: this.shuffleArray(this.state.portraits)
        
      })
    }
  }
  //check array function to see if portrait is selected already
  handleClick = id => {
    let clickedPortraitIds = this.state.clickedPortraitIds
    if (clickedPortraitIds.includes(id)) {
      
        this.checkScore()
     
        this.setState({
          score: 0,
          message: "You already picked that Rembrandt!",
          clickedPortraitIds: [],
          portraits: this.shuffleArray(this.state.portraits)
        });
      return
    }
    else {
      clickedPortraitIds.push(id)
      this.setState({
        score: this.state.score + 1,
        message: "Good! Pick another Rembrandt.",
        portraits: this.shuffleArray(this.state.portraits)
      })
      if (clickedPortraitIds.length === 16) {
        this.setState({
          score: 0,
          message: "Wow! you remember Rembrandt!",
          topScore: 16,
          clickedPortraitIds: []

        })
      }
    }
  }
  //the block of this is the argument for handling every click
  //check for lost case first...id has already been clicked
  //check for high score
  //set states to reset game
  //if not push id to the picked array
  //shuffle and go again until win or lose
  //special case for getting all 16


  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title />
        {this.state.portraits.map(portrait => (
          <Selfie
            handleClick={this.handleClick}
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
