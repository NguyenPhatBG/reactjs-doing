import React, { Component } from 'react';

export default class AddArray extends Component {
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.handleOnSubmit(this.state);
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleOnChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleOnChange} />
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" onChange={this.handleOnChange} />
                    <button>Submit</button>
                </form>
            </>
        );
    }
}