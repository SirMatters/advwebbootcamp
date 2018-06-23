import React, { Component } from 'react';
import './Recipe.css';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component {
  // defaultProps is a babel keyword
    static defaultProps = { 
      recipes: [
        {
          title: 'Pasta', 
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img:'spaghetti.jpeg'
        },
        {
          title: 'More Pasta', 
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img:'spaghetti.jpeg'
        },
        {
          title: 'Moar Pasta', 
          ingredients: ['flour', 'water'],
          instructions: "Mix ingredients",
          img:'spaghetti.jpeg'
        }
      ]
     }
     
    static propTypes = {
      recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    
    render() {
      const recipes = this.props.recipes.map((r, i) => (
        <Recipe key={i} {...r} />
      ));
      
      return (
        <div className='recipe-list'> 
          {recipes}
        </div>
      )
      
    }
}

export default RecipeList;