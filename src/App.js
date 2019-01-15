import React, { Component }  from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Images from "./components/ImageCard";
import Container from "./components/Container";
import images from "./images.json";

// shuffle function 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    clickedImages: []
  };

  clickedImage = id => {
    // assign the state of the empty array to a let to be updated
    let clickedImages = this.state.clickedImages;
    let score = this.state.score;
    let topScore = this.state.topScore;

    // if the clicked image has an id of the indexed characters
    if (clickedImages.indexOf(id) === -1) {
      clickedImages.push(id);
      console.log(clickedImages);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      alert("You win, you clicked each character with out clicking doubles")
      this.setState({
        score: 0,
        clickedImages: []
      });
    } else {
      this.setState({
        score: 0,
        clickedImages: []
      });
      console.log("duplicate")
      alert("Sorry you clicked the same person twice, start over")
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      })
    } 
  }

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ image: shuffle(images) })
  }
  
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <Container>
          {this.state.images.map(image => (
            <Images 
              key={image.id}
              id={image.id}
              name={image.name}
              image={image.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Container>
      </div>
    )
  }
}

export default App;


