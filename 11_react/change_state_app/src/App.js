import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "Tim",
          hobbies: ["Sailing", "Skiing"]
        },
        {
          name: "Fransis",
          hobbies: ["Tortuing", "Nicknaming"]
        },
        {
          name: "Mark",
          hobbies: ["Coding", "Grey T-Shirts"]
        },
        {
          name: "Steve",
          hobbies: ["Inventing", "Innovating"]
        }
      ]
    }
    setInterval(() => {
      const randPersonIndex = Math.floor(Math.random()*this.state.persons.length);
      const randHobbyIndex = Math.floor(Math.random()*this.state.persons[randPersonIndex].hobbies.length);
      const instructors = this.state.persons.slice();
      instructors[randPersonIndex] = Object.assign({}, instructors[randPersonIndex]);
      instructors[randPersonIndex].hobbies = instructors[randPersonIndex].hobbies.slice();
      instructors[randPersonIndex].hobbies.splice(randHobbyIndex, 1);
      this.setState({instructors});
      console.log(1)
    },1000)
  }
  render() {
    const persons = this.state.persons.map((person, ind) => (
      <div className="person" key={ind}>
        <h3>{person.name}</h3>
        <p>Hobbies:</p>
        <ul>
          {person.hobbies.map(h => <li>{h}</li>)}
        </ul>
      </div>
    ));
    return (
      <div className="App">
        {persons}
      </div>
    );
  }
}

export default App;
