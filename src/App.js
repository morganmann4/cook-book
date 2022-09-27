import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Add from './Add';
function App() {

  const [questions, setQuestions] = useState(data);
  const [addRecipe, setAddRecipe] = useState(false);
  const [ingredientAmount, setIngredientAmount] = useState(0)
  const [stepAmount, setStepAmount] = useState(0)

  const addIngredientValue = () => {
    setIngredientAmount(ingredientAmount + 1)
  };

  const addStepValue = () => {
    setStepAmount(stepAmount + 1)
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);

  };

  return (
    <main>
      <div className='container'>
        <div className="top-content">
        <h3>Recipes</h3>
        <button className="add-btn" onClick={() => setAddRecipe(!addRecipe)}>Add Recipe</button>
        </div>
        { addRecipe && <Add addIngredient={addIngredientValue} ingredientAmount={ingredientAmount} 
                            addStep={addStepValue} stepAmount={stepAmount} onSubmit={handleSubmit}/> }
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
