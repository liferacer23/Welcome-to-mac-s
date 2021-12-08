import React, {useState, useEffect} from "react";
import Food from "./Food";
import "./App.css"
import { BsSearch } from "react-icons/bs";

const App = ()=>
{
  const {REACT_APP_API_KEY}=process.env;
  const ID = REACT_APP_API_KEY;
  const KEY = "72f6465fc75711f0add62590f1cdff4c";
  const [query,setQuery] = useState("salad");
  const [foods, setFood] = useState([]);
  const [search, setSearch]=useState("");
  
  useEffect(()=>{
  getFood();
  },[query]);
  
  
  const getFood = async ()=>
  {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}`);
     const data = await response.json();
     setFood(data.hits);
      console.log(foods);
    }
    
    const updateSearch = e =>
    {
      setSearch(e.target.value)
    } 
     
    const getinput = e =>
    {
       e.preventDefault();
       setQuery(search);
       setSearch("");
    }

    return (
      <div className="App">  
      <form className="search-form" onSubmit={getinput}>
      <input className="search-bar" value={search} placeholder="Search..." type="text" onChange= {updateSearch} />
      <div className="search-button"onClick={getinput}><BsSearch className="bts"/></div>
      </form>
    
      <h1 className="title">Welcome to mac's</h1>
      <div className="desc">
      <p>A place were you can search for any food or drinks and find out the recipes of that food, not only that but you can also find the calories of that food.<br/></p>
      </div>
      <div className="food">
      {foods.map(food=>(
        <Food 
              key={food.recipe.source}
              title = {food.recipe.label}
              image = {food.recipe.image}
              calories = {food.recipe.calories}
              ingredients = {food.recipe.ingredients}
              mealType={food.recipe.mealType}
              />
      ))}

      </div>
      </div>
     
    );
}

export default App;
