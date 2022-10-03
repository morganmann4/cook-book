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
  const [newId, setNewID] = useState(0)
  const [list, setList] = useState([])
  const [display, setDisplay] = useState([])
  // const [index, setIndex] = "1"

  /* Ingredient List */
  const [ingredientList, setIngredientList] = useState([{ ingredient: "" }]);
  const [displayIngredientList, setDisplayIngredientList] = useState([])

  const handleIngredientChange = (e, index) => {
    const { name, value } = e.target;
    const temp_list = [...ingredientList];
    const ing = e.target;
    temp_list[index][name] = value;
    setIngredientList(temp_list);

  };

  const handleIngredientRemove = (index) => {
    const temp_list = [...ingredientList];
    temp_list.splice(index, 1);
    setIngredientList(temp_list);
  };

  const handleIngredientAdd = () => {
    setIngredientList([...ingredientList, { ingredient: "" }])
  };

  const handleDisplayItems = (displayList) => {
    const display = []
      displayList.map((singleIngredient, index) => (
        setDisplay([...display, singleIngredient])
      ))}
  

  const handleRecipeSubmit = (recipeName, displayIngredientList, stepList) => {
    const ingredients = handleDisplayItems(displayIngredientList)
    const newItem = { id: new Date().getTime().toString(), name: recipeName }
    console.log(newItem)
    console.log(displayIngredientList)
    //   ingredients: ingredientList, steps: stepList, showInfo: false };
    // setList([...list, {recipeName}]);

    // const temp_index = list.length- 1
    // const temp_recipe[temp_iindex][recipeName]
    // setList([...list, {[temp_index], recipeName, ingredientList, stepList, showInfo:false}]);
    // console.log(...list)
    // setAddRecipe(false)
    // setIngredientList([{ ingredient: "" }])
  };

  const changeShowInfo = (id, showInfo) =>{
    setList(
      list.map((item) => {
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
        { addRecipe && <Add handleRecipeSubmit={handleRecipeSubmit} handleIngredientChange={handleIngredientChange}
                        handleIngredientRemove={handleIngredientRemove} handleIngredientAdd={handleIngredientAdd} ingredientList={ingredientList}
                        displayIngredientList={displayIngredientList}/> }
        <section className="recipe-list-container">
        {list.length < 1 ? <p>You dont have any recipes yet!</p> :
        <div class="recipe-list-forum">
        <h2>Recipes</h2>
        <List items={list} changeShowInfo={changeShowInfo}/>
        </div>}
        </section>
      </div>
    </main>
  );
}

export default App;
