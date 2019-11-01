import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    name: 'Phat'
  };

  onHandleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted: ', this.state.name);
  }

  render() {
    return (
      <div className="App">
      <h4>My name is {this.state.name}</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onHandleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
