import React, { Component, Fragment } from "react";
import AddArray from "./screens/add.array";
import { Props01 } from "./screens/props/props.01";
import "./App.css";

class App extends Component {
  state = {
    myArr: [
      { name: "An", age: 20, address: "Gia Lam - HN", id: 1 },
      { name: "Hoai", age: 22, address: "Bac Ninh - HN", id: 2 },
      { name: "Tam", age: 30, address: "Da Nang - HN", id: 3 }
    ]
  };
  handleOnSubmit = (userDOB) => {
    userDOB.id = Math.random();
    let userDOBs = [...this.state.myArr, userDOB];
    this.setState({
      myArr: userDOBs
    });
  }
  onDeleteItem = (id) => {
    let myItem = this.state.myArr.filter(item => item.id !== id);
    this.setState({ myArr: myItem });
  }
  render() {
    const { myArr } = this.state;
    return (
      <div className="App">
        <AddArray handleOnSubmit={this.handleOnSubmit} />
        {myArr.map(
          (myArr, key) =>
            myArr.age >= 22 && (
              <Fragment key={key}>
                <Props01
                  id={myArr.id}
                  name={myArr.name}
                  age={Number(myArr.age)}
                  address={myArr.address}
                  onDeleteItem={this.onDeleteItem}
                />
              </Fragment>
            )
        )}
      </div>
    );
  }
}

export default App;
