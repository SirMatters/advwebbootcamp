import React, {Component} from 'react';
import './RecipeForm.css';

class RecipeForm extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  }
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
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handlePlus(){
    this.setState((previousState, currentProps) => {
      return({ingredients: [...previousState.ingredients, '']})
    });
  }

  handleChangeIng(e) {
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i) => {
      i === index ? e.target.value : ing
    });
    this.setState({ingredients});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    });
  }

  render() {
    const {ingredients, instructions, img, title} = this.state;
    const {onClose} = this.props;
    let inputs = ingredients.map((ing, i)=>(
      <div className='ingredient-line' key={`ing-${i}`}>
        <label>{i+1}
          <input
            type='text'
            name={`ing-${i}`}
            value={ing}
            size={45}
            autoComplete='off'
            placeholder=' Ingredient'
            onChange={this.handleChangeIng}
          />
        </label>
      </div>
    ));

    return(
      <div className='recipe-form-container'>
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <button
            type='button'
            className='close-button'
            onClick={onClose}
          >
            X
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-title-input'>Title</label>
            <input
              id='recipe-title-input'
              key='title'
              name='title'
              type='text'
              value={title}
              size={42}
              autoComplete='off'
              onChange={this.handleChange}
            />
          </div>
          <label
            htmlFor='recipe-instructions-input'
          >
            Instructions
          </label>
          <textarea
            key='instructions'
            id='recipe-instructions-input'
            name='instructions'
            rows='4'
            cols='30'
            value={instructions}
            onChange={this.handleChange}
          />
          {inputs}
          <button
            type='button'
            onClick={this.handlePlus}
            className='buttons'
          >
            +
          </button>
          <div className='recipe-form-line'>
            <label htmlFor='recipe-img-input'>IMG</label>
            <input
              id='recipe-img-input'
              type='text'
              placeholder=''
              name='img'
              value={img}
              size={36}
              autoComplete='off'
              onChange={this.handleChange}
            />
          </div>
          <button
            type='submit'
            className='buttons'
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeForm;