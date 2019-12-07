import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import UnicornContainer from './containers/unicornContainer'

export default class App extends Component {
  state = {
    unicorns: [{
      name: "Sparkles",
      location: "Pasture",
      color: "Pink",
      food: "Rainbows"
    }, {
      name: "Moomoo",
      location: "Trail",
      color: "White",
      food: "Ice cream"
    }, {
      name: "Fluffy",
      location: "Stable",
      color: "Purple",
      food: "Cookies"
    }]
  };

  async componentWillMount() {
    let response = await fetch('/api/unicorn');
    let unicorns = await response.json();
    console.log(`Unicorns: ${unicorns}`);
    this.setState({unicorns})
  }

  render() {
    return (
      <div>
        <UnicornContainer unicorns={this.state.unicorns}/>
      </div>
    );
  }
}

