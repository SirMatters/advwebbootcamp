import React, { Component } from 'react';
import './App.css';

const InputArea = ({inputText, todos}) => {
  console.log(inputText)
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const todos = [...todos,
                    inputText];
      this.setState({inputText: '', todos});
    }
  }>  
      <h1>React ToDo App</h1>
      <input 
        type='text'
        name='inputText' 
        placeholder='What needs to be done?'
        onChange={(e)=>{
          App.setState({[e.target.name]: e.target.value})
        }}
      />
      <input type='Submit'/>
    </form>
  )
}

const ToDo = ({text}) => {
  return (
    text
  );
}

const TasksPanel = ({todos}) => {
  const tasksList = todos.map((todo, i)=> (
    <li>
      <ToDo 
        key={i} 
        text={todo} 
      />
    </li>
  ));
  console.log(tasksList);
  return (
    <ol className='todoList'>
      {[...tasksList]}
    </ol>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todos: ['Feed the cat', 'Cool the fuck down']
    }
  }
  render() {
    return (
      <div className="App">
        <InputArea data={this.state}/>
        <TasksPanel todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
