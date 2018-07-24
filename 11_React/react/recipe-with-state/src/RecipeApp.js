import React, { Component } from 'react';
import RecipeList from './RecipeList';
import NavBar from './NavBar';
import RecipeInput from './RecipeInput';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes : [
        {
          id: 0,
          title: 'Pasta', 
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img:'spaghetti.jpeg'
        },
        {
          id: 1,
          title: 'More Pasta', 
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img:'spaghetti.jpeg'
        },
        {
          id: 2,
          title: 'Moar Pasta', 
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img:'spaghetti.jpeg'
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <NavBar 
          onNewRecipe={() => this.setState({showForm: true})}
        />
        { showForm ? 
          <RecipeInput 
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}
          /> : 
          null }
        <RecipeList 
          recipes={this.state.recipes}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default RecipeApp;