import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
  static handleDel = (e) => {
    const delId = e.target.id.split('-')[1];
    this.props.onDelete(delId);
  }

  render() {
    const {title, img, instructions, id} = this.props;
    const ingredients = this.props.ingredients.map((ing, ind)=>(
      <li key={ind}>{ing}</li>
    ));
    return(
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions</h4>
          <p>{instructions}</p>
        </div>
        <button
          type='button'
          onClick={this.props.onDelete}
          id={`recipedel-${id}`}
        >
          DELETE
        </button>
      </div>
    )
  }
}

export default Recipe;