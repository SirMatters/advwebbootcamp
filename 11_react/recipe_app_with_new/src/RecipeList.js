import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    const {recipes} = this.props;
    const cards = recipes.map((r) => (
      <Recipe
        key={r.id}
        id={r.id}
        title={r.title}
        instructions={r.instructions}
        ingredients={r.ingredients}
        img={r.img}
        onDelete={this.props.onDelete}
      />
    ));
    return(
      <div className="recipe-list">
        {cards}
      </div>
    )
  }
}

export default RecipeList;