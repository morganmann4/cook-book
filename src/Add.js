import React, { useState } from 'react'

const Add = ( { addIngredient, ingredientAmount, addStep, stepAmount, onSubmit }) => {

    const {name, setName} = useState("")
    const [recipeName, setRecipeName] = useState('')
    const [ingredientList, setIngredientList] = useState([])
    // const [ingredientName, setIngredientName] = useState('')
    const [portionList, setPortionList] = useState([])
    const [stepList, setStepList] = useState([])
    // const [stepName, setStepName] = useState('')
  return (

    <div className='add-recipe-form'>

    <div className='input-recipe-container'>
    <p className='input-label'>Recipe Name</p>
    <input
    type='text'
    id = "0"
    className='input-description'
    placeholder='e.g. pasta'
    value={recipeName}
    onChange={(e) => setRecipeName(e.target.value)} />
    </div>

    
    <div className='input-recipe-container-ing'>
    <p className='input-label'>Ingredient</p>
    <input
    type='text'
    id ="1"
    className='input-description-ing'
    placeholder='e.g. milk'
    value={ingredientList['id']}
    onChange={(e) => setIngredientList(...ingredientList, e.target.value)} />


    <p className='input-label'>Portion</p>
    <input
    type='text'
    id="1"
    className='input-description-ing'
    placeholder='e.g. 3 cups'
    value={portionList['id']}
    onChange={(e) => setPortionList(...portionList, e.target.value)} /> 
    </div>

{/* Ingredient Loop */}
    {/* {Array.from(Array(ingredientAmount)).map((c, index) => {
        return (   
            <div className='input-recipe-container-ing'>
            <p className='input-label'>Ingredient</p>
            <input
            type='text'
            id = 'index'
            className='input-description-ing'
            placeholder='e.g. milk'
            value={ingredientList['id']}
            onChange={(e) => setIngredientList(...ingredientList, e.target.value)} />
        
            <p className='input-label'>Portion</p>
            <input
            type='text'
            id='index'
            className='input-description-ing'
            placeholder='e.g. 3 cups'
            value={portionList['id']}
            onChange={(e) => setPortionList(...portionList, e.target.value)} /> 
            </div>
      )})} */}
{/*     
    <div className="add-detail-btn">
    <button className='detail-btn' onClick={addIngredient}> Add Ingredient</button>
    </div> */}

    {/* Step */}
    <div className='input-recipe-container-step'>
    <p className='input-label'>Step 1.</p>
    <input
    type='text'
    id='1'
    className='input-description-step'
    value={stepList['id']}
    onChange={(e) => setStepList(...stepList, e.target.value)} />
    </div>

{/* Step loop */}
    {/* {Array.from(Array(stepAmount)).map((c, index) => {
        return (  
            <div className='input-recipe-container-step'>
            <p className='input-label' key={c}>Step {index + 2}.</p>
            <input
            type='text'
            className='input-description-step'
            value={name}
            onChange={(e) => setName(e.target.value)} />
            </div>
        )})} */}

    {/* <div className="add-detail-btn">
    <button className='detail-btn' onClick={addStep}> Add Step</button>
    </div> */}

    <div className='submit-btn-container'>
    <button type='submit' className='submit-btn' 
      onClick={() => console.log(recipeName, ingredientList, portionList, stepList)}>Submit</button>
    </div>

    </div>
  )
}

export default Add