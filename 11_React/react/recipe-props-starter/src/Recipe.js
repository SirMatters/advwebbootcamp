import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }

  render() {
    const {title, img, instructions} = this.props
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    return (
      <div className='recipe-card'>
        <div className='card-image'>
          <img src={img} alt={title} />
        </div>
        <div className='recipe-card-content'>
          <h3 className='recipe-title'>{title}</h3>
          <h4>Ingredients</h4>
          <ul>
            {ingredients}
          </ul>
          <h3>Instructions</h3>
          <p> {instructions} </p>
        </div>
      </div>
    );
  }
}

export default Recipe;