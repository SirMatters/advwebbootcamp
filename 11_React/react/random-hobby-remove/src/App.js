import React, { Component } from 'react';
import './App.css';


// class InstructorItem extends Component {
//   render() {
//     return (
//       <li>
//         <h3>{this.props.name}</h3>
//         <h4>Hobbies: {this.props.hobbies.join(", ")}</h4>
//       </li>
//     )
//   }
// }

//with stateless functional component

const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Hobbies: {props.hobbies.join(", ")}</h4>
    </li>
  );
}

// InstructorItem.propTypes = ...

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
      
      // const instructors = this.state.instructors.slice();
      // instructors[personIndex] = Object.assign({}, instructors[personIndex]);
      // instructors[personIndex].hobbies = instructors[personIndex].hobbies.slice();
      // instructors[personIndex].hobbies.splice(hobbyIndex, 1);
      
      //or another way:

      const instructors = this.state.instructors.map((inst, i) => {
        if (i === personIndex) {
          const hobbies = [...inst.hobbies]; //  == inst.hobbies.slice();
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst,
            hobbies
          }
        }
        return inst;
      })

      this.setState({instructors}); //object destructing! state is an object
    }, 1000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem 
        key ={index}
        name = {instructor.name}
        hobbies = {instructor.hobbies}
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


export default App;
