import React, { useState } from 'react'

const Ingredients = ( { handleIngredientChange, handleIngredientRemove, handleIngredientAdd, ingredientList, displayIngredientList  }) => {
const [display, setDisplay] = useState([])

  return (
    <form className="Apple" autoComplete="off">
      <div className="form-field">
        <label htmlFor="ingredient">Ingredients</label>
        {ingredientList.map((singleIngredient, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="ingredient"
                type="text"
                id="ingredient"
                value={singleIngredient.ingredient}
                onChange={(e) => handleIngredientChange(e, index)}
                required
              />
              {ingredientList.length - 1 === index && ingredientList.length < 4 && (
                <button
                  type="button"
                  onClick={handleIngredientAdd}
                  className="add-btn"
                >
                  <span>Add Ingredient</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {ingredientList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleIngredientRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>

      </div>
    </form>
  );
}

export default Ingredients;