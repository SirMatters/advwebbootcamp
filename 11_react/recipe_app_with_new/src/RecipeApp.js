import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList'
import NavBar from './NavBar';
import RecipeForm from './RecipeForm';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state= {
      recipes: [
        {
          id: 0,
          title : 'pasta',
          ingredients : ['flour', 'water'],
          instructions : "Mix all",
          img : "https://sg.fiverrcdn.com/photos/57166304/original/c0a17bcc12c5d33198ef94541c40aedaf8ecee50.png?1473939135"
        },
        {
          id: 1,
          title : 'More pasta',
          ingredients : ['flour', 'water'],
          instructions : "Mix all",
          img : "https://sg.fiverrcdn.com/photos/57166304/original/c0a17bcc12c5d33198ef94541c40aedaf8ecee50.png?1473939135"
        },
        {
          id: 2,
          title : 'More more pasta',
          ingredients : ['flour', 'water'],
          instructions : "Mix all",
          img : "https://sg.fiverrcdn.com/photos/57166304/original/c0a17bcc12c5d33198ef94541c40aedaf8ecee50.png?1473939135"
        }
      ],
      nextId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleNew = this.handleNew(this);
  }

  handleSave(recipe) {
    this.setState((previousState, props) => {
      const newRecipe = {...recipe, id: this.state.nextId};
      return {
        recipes: [...this.state.recipes, newRecipe],
        nextId: previousState.nextId + 1,
        showForm: false
      }
    });
  }

  handleDel(e) {
    const toDelete = e.target.id.split('-')[1];
    this.setState((previousState, props) => {
      const recipes = previousState.recipes.slice().filter((r) => (r.id != toDelete));
      return {recipes}
    });
  }

  handleNew() {
    this.setState({showForm: true});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <NavBar
          onNew={() => this.setState({showForm: true})}
        />
        {
          showForm ?
          <RecipeForm
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}
          /> :
          null
        }
        <RecipeList
          recipes={this.state.recipes}
          onDelete={this.handleDel}
        />
      </div>
    );
  }
}

export default RecipeApp;