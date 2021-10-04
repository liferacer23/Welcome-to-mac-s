import React, {useEffect, useState, useRef} from 'react';




const Food =({title,image,calories,ingredients,mealType}) => {
    
    const [flip, setFlip]=useState(false);
    const [height, setHeight]=useState('initial');
    const frontElement = useRef();
    const backElement = useRef();

    const setMaxHeight = () =>
    {
        const frontHeight = frontElement.current.getBoundingClientRect().height;
        const backHeight = frontElement.current.getBoundingClientRect().height;
        setHeight(Math.max(frontHeight,backHeight,300));
    }
    useEffect(()=>{
        setMaxHeight();
    },[title,calories,mealType,ingredients,image]);

    const flipper =()=>
    {
        setFlip(!flip);
    }
    
    return (
        <div className={`card ${flip ? 'flip':''}`} onClick={flipper} style={{height:height}}>
            <div className="front" ref={frontElement} >
                <h2>{title}</h2>
                <img className ="image" src={image} alt="Food" />
            </div>
            <div className="back" ref={backElement}>
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
