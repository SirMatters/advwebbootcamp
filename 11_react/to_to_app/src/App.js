import React, { Component } from 'react';
import './App.css';


const TaskList = ({data}) => {
  const tasks = data.map((task, ind) => (
    <li className="task" key={ind}>{task}</li>
  ));
  return(
    <ol className="task-list">
      {tasks}
    </ol>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["Feed cat", "Make a joke"],
      inputText: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = [...this.state.data, this.state.inputText];
    this.setState({data, inputText: ""});
  }

  render() {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="input"
            autoComplete="off"
            type="text"
            name="inputText"
            placeholder="What needs to be done?"
            value={this.state.inputText}
            onChange={(e) => this.setState({[e.target.name]: e.target.value})}/>
          <button
            type="submit"
          >
            ADD
          </button>
        </form>
        <TaskList data={this.state.data}/>
      </div>
    );
  }
}

export default App;