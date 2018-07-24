import React, { Component } from 'react';
import './Recipe.css';
import Recipe from './Recipe';

class RecipeList extends Component {
    render() {
      const {onDelete} = this.props;
      const recipes = this.props.recipes.map((r, i) => (
        <Recipe key={r.id} {...r} onDelete={onDelete}/>
      ));
      
      return (
        <div className='recipe-list'> 
          {recipes}
        </div>
      )
      
    }
}

export default RecipeList;