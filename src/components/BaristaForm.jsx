import { useState } from "react";
import { ReceipeChoices } from "./ReceipeChoices";
// import drinksJson from "./drinks.json";
export const BaristaForm = () => {
//   const [currentDrink, setCurrentDrink] = useState("");
//   const [trueRecipe, setTrueRecipe] = useState({});

  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: "",
  });
  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"],
  };
  const onCheckAnswer = (e) => {
    console.log(e.target.value);
  };
  const onNewDrink = () => {
    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: "",
    });

    getNextDrink();
  };

  const getNextDrink = () => {
    // let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    // setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    // setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  };

  return (
    <div>
      <h2>Hi, I would like to order a:</h2>

      <div className="drink-container">
        <h2 className="mini-heaer"></h2>
        <button type="new-drink-button" onClick={onNewDrink} className="button newdrink">🔄</button>      
        </div>
      <form>
        <input type="text" />
      </form>
      <button className="button submit" onClick={onCheckAnswer} type="submit">
        Check Answer
      </button>
      <button
        className="button submit"
        onClick={onNewDrink}
        type="new-drink-button"
      >
        New Drink
      </button>
      <h3>Temperature</h3>
      <div className="answer-space">{inputs["temperature"]}</div>
      <ReceipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="temperature"
        choices={ingredients["temperature"]}
        checked={inputs["temperature"]}
      />
      <h3>Syrup</h3>

      <div className="answer-space">{inputs["syrup"]}</div>
      <ReceipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="syrup"
        choices={ingredients["syrup"]}
        checked={inputs["syrup"]}
      />

      <h3>Milk</h3>

      <div className="answer-space">{inputs["milk"]}</div>
      <ReceipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="milk"
        choices={ingredients["milk"]}
        checked={inputs["milk"]}
      />

      <h3>Blended</h3>

      <div className="answer-space">{inputs["blended"]}</div>
      <ReceipeChoices
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }))
        }
        label="blended"
        choices={ingredients["blended"]}
        checked={inputs["blended"]}
      />
    </div>
  );
};
