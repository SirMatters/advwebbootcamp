import React, {Component} from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : '',
      instructions: '',
      ingredients: [''],
      img: ''
    }
  }

  handlePlus(e){
    this.setState({});
  }

  render() {
    return(
      <div className='recipe-form'>
      <input
        name='title'
        type='text'
      />
      <label for='title'>Title</label>
      <input
        name='instructions'
        type='textArea'
      />
      <label for='title'>Instructions</label>
      {
        this.state.ingredients.map((ing, ind) =>(
          <div className='ingredient-area' id={ind+1} key={ind+1}>
            <input
              type='text'
              name={`ing-${ing+1}`}
            />
            <label for={`ing-${ing+1}`}>{`${ing+1}.`}</label>
          </div>
        ))
      }
      <button onClick={this.handlePlus>
        +
      </button>
      <input
        name='img'
        type='text'
      />
      <label for='img'>IMG</label>
      </div>
    )
  }
}

export default RecipeForm;