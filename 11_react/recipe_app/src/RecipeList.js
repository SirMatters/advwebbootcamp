import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    const {recipes} = this.props;
    const cards = recipes.map((r, ind) => (
      <Recipe key={ind} {...r} />
    ));
    return(
      <div className="recipe-list">
        {cards}
      </div>
    )
  }
}

export default RecipeList;