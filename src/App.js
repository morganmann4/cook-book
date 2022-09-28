import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Add from './Add';
import List from './List'
function App() {

  const [questions, setQuestions] = useState(data);
  const [addRecipe, setAddRecipe] = useState(false);
  const [ingredientAmount, setIngredientAmount] = useState(0)
  const [stepAmount, setStepAmount] = useState(0)
  const [recipeList, setRecipeList] = useState([])
  const [newId, setNewID] = useState(0)

  const addIngredientValue = () => {
    setIngredientAmount(ingredientAmount + 1)
  };

  const addStepValue = () => {
    setStepAmount(stepAmount + 1)
  };


  const handleRecipeSubmit = (recipeName, ingredientList, stepList) => {
    // e.preventDefault(e);
    console.log(recipeName, ingredientList, stepList)
    const newItem = { id: new Date().getTime().toString(), title: recipeName, 
      ingredients: ingredientList, steps: stepList, showInfo: false };
    setRecipeList([...recipeList, newItem]);
    setAddRecipe(false)
  };

  const changeShowInfo = (id, showInfo) =>{
    setRecipeList(
      recipeList.map((item) => {
        if (item.id === id) {
          return { ...item, showInfo: !showInfo };
        }
        return item;
      })
    );

 }

  return (
    <main>
      <div className="container">
        <div className="top-content">
        <h1>Cook Book</h1>
        <button className="add-btn" onClick={() => setAddRecipe(!addRecipe)}>Add Recipe</button>
        </div>
        { addRecipe && <Add addIngredient={addIngredientValue} ingredientAmount={ingredientAmount} 
                            addStep={addStepValue} stepAmount={stepAmount} handleSubmit={handleRecipeSubmit}/> }
        <section className="recipe-list-container">
        {recipeList.length < 1 ? <p>You dont have any recipes yet!</p> :
        <div class="recipe-list-forum">
        <h2>Recipes</h2>
        <List items={recipeList} changeShowInfo={changeShowInfo}/>
        </div>}
        </section>
      </div>
    </main>
  );
}

export default App;
