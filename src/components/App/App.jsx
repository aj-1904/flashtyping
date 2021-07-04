import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";

const TotalTime = 60;
const ServiceUrl = "http://metaphorpsum.com/paragraphs/1/9";

class App extends React.Component {
  state = {
    selectedParagraph: "Hello World!",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
  };

  componentDidMount() {
    // fetch(ServiceUrl)
    //   .then((response) => response.text())
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({ selectedParagraph: data });
    //   });

    const selectedParagraphArray = this.state.selectedParagraph.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });
    this.setState({ testInfo });
  }

  handleUserInput = (inputValue) => {
    console.log(inputValue);
  }

  render() {
    console.log("Test Info - ", this.state.testInfo);
    return (
      <div className="app">
        {/* Nav Section */}
        <Nav />

        {/* landing page */}
        <Landing />
        {/* Challenge Section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
        />
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
