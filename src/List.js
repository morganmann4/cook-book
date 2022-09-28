import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const List = ({ items, changeShowInfo }) => {
  return (
    <div className="recipe-list">
      {items.map((item) => {
        const { id, title, ingredients, steps, showInfo} = item;
        return (
          <article className="recipe-list-item" key={id}>
            <header>
                <h3>{title}</h3>
                <button className="show-info-btn" onClick={() => changeShowInfo(id, showInfo)}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {item.showInfo && 
            <div>
                <h4>Ingredients</h4>
                <p>{ingredients}</p>
                <h4>Steps</h4>                
                <p>{steps}</p>
            </div>}
        </article>
        );
      })}
    </div>
  );
};

export default List;
