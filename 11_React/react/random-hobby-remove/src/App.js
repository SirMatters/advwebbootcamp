import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    }
    setTimeout(()=>{
      const personIndex = Math.floor(
        Math.random()*
        this.state.instructors.length
      );

      const hobbyIndex = Math.floor(
        Math.random()*
        this.state.instructors[personIndex].hobbies.length
      );
      
      const instructors = this.state.instructors.slice();
      instructors[personIndex] = Object.assign({}, instructors[personIndex]);
      instructors[personIndex].hobbies = instructors[personIndex].hobbies.slice();
      instructors[personIndex].hobbies.splice(hobbyIndex, 1);

      this.setState({instructors}); //object destructing! state is an object
    }, 1000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <Instructor 
        key ={index}
        instructor = {instructor}
      />
    ));
    return(
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    )
  }
}

class Instructor extends Component {
  render() {
    const instructor = this.props.instructor;
    return (
      <li>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    )
  }
}

export default App;
