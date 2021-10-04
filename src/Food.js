import React, {useState} from 'react';




const Food =({title,image,calories,ingredients,mealType}) => {
    
    const [flip, setFlip]=useState(false);

    const flipper =()=>
    {
        setFlip(!flip);
    }
    
    return (
        <div className={`card ${flip ? 'flip':''}`} onClick={flipper}>
            <div className="front" >
                <h2>{title}</h2>
                <img className ="image" src={image} alt="Food" />
            </div>
            <div className="back" >
                <h3>Calories : {calories}</h3>
                <h3>Meal Type: {mealType}</h3>  
                <ol> 
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            </div>
            
        </div>
    )
}





export default Food;
