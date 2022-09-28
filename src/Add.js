import React, { useState } from 'react'

const Add = ( { handleSubmit }) => {

    // const {name, setName} = useState("")
    const [recipeName, setRecipeName] = useState('')
    const [ingredientList, setIngredientList] = useState([])
    // const [ingredientName, setIngredientName] = useState('')
    // const [portionList, setPortionList] = useState([])
    const [stepList, setStepList] = useState([])
    // const [stepName, setStepName] = useState('')
  return (

    <div className='add-recipe-form'>

    <div className='input-recipe-container'>
    <p className='input-label'>Recipe Name</p>
    <input
    type='text'
    className='input-description'
    placeholder='e.g. Pot Roast'
    value={recipeName}
    onChange={(e) => setRecipeName(e.target.value)} />
    </div>

    
    <div className='input-recipe-container-ing'>
    <p className='input-label'>Ingredients</p>
    <input
    type='text'
    className='input-description-ing'
    placeholder='e.g. 2 cups beef broth'
    value={ingredientList}
    onChange={(e) => setIngredientList(e.target.value)} />
    </div>

    {/* <p className='input-label'>Portion</p>
    <input
    type='text'
    id="1"
    className='input-description-ing'
    placeholder='e.g. 3 cups'
    value={portionList}
    onChange={(e) => setPortionList(e.target.value)} /> 
    </div> */}

    {/* Step */}
    <div className='input-recipe-container-step'>
    <p className='input-label'>Steps</p>
    <input
    type='text'
    className='input-description-step'
    value={stepList}
    onChange={(e) => setStepList(e.target.value)} />
    </div>



    <div className='submit-btn-container'>
    <button type='submit' className='submit-btn' 
      onClick={() => handleSubmit(recipeName, ingredientList, stepList)}>Submit
      </button>
    </div>

    </div>
  )
}

export default Add