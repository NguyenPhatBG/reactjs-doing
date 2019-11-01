import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    hello: 'Hello Friend!'
  };
  handleClick = (e) => {
    console.log(this.state);
    this.setState({ hello: 'Hello Phat!' });
  }
  handleMouseOver = (e) => {
    console.log(e.target, e.pageX);
  }
  hanleCopy = (e) => {
    console.log('Trying to copy this.');
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.hello}</h1>
        <button onClick={this.handleClick}>Click M1</button>
        <button onMouseOver={this.handleMouseOver}>Mouse Over</button>
        <p onCopy={this.hanleCopy}>Copy text from me.</p>
      </div>
    );
  }
}

export default App;
