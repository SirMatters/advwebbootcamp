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
    this.handleChange = this.handleChange.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }

  handlePlus(){
    this.setState((previousState, currentProps) => {
      const ingredients = [...previousState.ingredients, ''];
      return {ingredients}
    });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  render() {
    return(
      <div className='recipe-form'>
        <form>
          <input
            name='title'
            type='text'
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label for='title'>Title</label>
          <textarea
            name='instructions'
            rows='4'
            cols='30'
            onChange={this.handleChange}
            value={this.state.instructions}
          />
          <label for='title'>Instructions</label>
          {
            this.state.ingredients.map((ing, ind) =>(
              <div className='ingredient-area' id={ind+1} key={ind+1}>
                <label for={`ing-${ing+1}`}>{`${ind+1}.`}</label>
                <input
                  type='text'
                  name={`ing-${ing+1}`}
                  value={ing}
                  onChange={()=>{}}
                />
              </div>
            ))
          }
          <button onClick={this.handlePlus}>
            +
          </button>
          <input
            name='img'
            type='text'
            onChange={this.handleChange}
            value={this.state.img}
          />
          <label for='img'>IMG</label>
          <button
            onClick={(e)=>console.log(e)}
            type='submit'
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeForm;