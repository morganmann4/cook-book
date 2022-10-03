import React, { useState } from 'react'
import Ingredients from "./Ingredients";
import Steps from "./Steps";

const Add = ( { handleRecipeSubmit, handleIngredientChange, handleIngredientRemove, handleIngredientAdd, ingredientList, displayIngredientList }) => {

    const [recipeName, setRecipeName] = useState("")
    const [stepList, setStepList] =  useState([{ step: "" }])
    return (

    
    <div className='add-recipe-form'>

    <div className='input-recipe-container'>
    <p className='input-label'>Recipe Name</p>
    <input
    name="recipe"
    type="text"
    id="recipe"
    className="input-description"
    placeholder='e.g. Pot Roast'
    value={recipeName}
    onChange={(e) => setRecipeName(e.target.value)} />
    </div>
    
    <Ingredients handleIngredientChange={handleIngredientChange}
              handleIngredientRemove={handleIngredientRemove} handleIngredientAdd={handleIngredientAdd} ingredientList={ingredientList}
              displayIngredientList={displayIngredientList}/>

    {/* <Steps handleIngredientChange={handleServiceChange}
      handleServiceRemove={handleServiceRemove} handleServiceAdd={handleServiceAdd} serviceList={list}/> */}
    
    {/* <div className='input-recipe-container-ing'>
    <p className='input-label'>Ingredients</p>
    <input
    type='text'
    className='input-description-ing'
    placeholder='e.g. 2 cups beef broth'
    value={ingredientList}
    onChange={(e) => setIngredientList(e.target.value)} />
    </div> */}

    {/* <p className='input-label'>Portion</p>
    <input
    type='text'
    id="1"
    className='input-description-ing'
    placeholder='e.g. 3 cups'
    value={portionList}
    onChange={(e) => setPortionList(e.target.value)} /> 
    </div> */}

    {/* Step
    <div className='input-recipe-container-step'>
    <p className='input-label'>Steps</p>
    <input
    type='text'
    className='input-description-step'
    value={stepList}
    onChange={(e) => setStepList(e.target.value)} />
    </div> */}



    <div className='submit-btn-container'>
    <button type='submit' className='submit-btn' 
      onClick={() => handleRecipeSubmit(recipeName, ingredientList, stepList)}>Submit
      </button>
    </div>

    </div>
  )
}

export default Add