import React, { useState } from 'react';
import FoodData from './FoodData';

function Test() {
    const [pizzaCount, setPizzaCount] = useState(0);
    const [burgerCount, setBurgerCount] = useState(0);
    const [saladCount, setSaladCount] = useState(0);
    const [pastaCount, setPastaCount] = useState(0);

    const incrementPizza = () => {
        setPizzaCount(pizzaCount + 1);
    };

    const decrementPizza = () => {
        if (pizzaCount > 0) {
            setPizzaCount(pizzaCount - 1);
        }
    };

    const incrementBurger = () => {
        setBurgerCount(burgerCount + 1);
    };

    const decrementBurger = () => {
        if (burgerCount > 0) {
            setBurgerCount(burgerCount - 1);
        }
    };

    const incrementSalad = () => {
        setSaladCount(saladCount + 1);
    };

    const decrementSalad = () => {
        if (saladCount > 0) {
            setSaladCount(saladCount - 1);
        }
    };

    const incrementPasta = () => {
        setPastaCount(pastaCount + 1);
    };

    const decrementPasta = () => {
        if (pastaCount > 0) {
            setPastaCount(pastaCount - 1);
        }
    };

    return (
        <div>
            <h2>Food Menu</h2>
            <ul>
                {FoodData.map((food, index) => (
                    <li key={index}>
                        {food.name}: ${food.price}
                    </li>
                ))}
            </ul>
            <ul>
                <li>
                    Pizza: {pizzaCount}
                    <button onClick={decrementPizza}>-</button>
                    <button onClick={incrementPizza}>+</button>
                    <input type="number" value={pizzaCount*10}  />
                </li>
                <li>
                    Burger: {burgerCount}
                    <button onClick={decrementBurger}>-</button>
                    <button onClick={incrementBurger}>+</button>
                    <input type="number" value={burgerCount*8}  />
                </li>
                <li>
                    Salad: {saladCount}
                    <button onClick={decrementSalad}>-</button>
                    <button onClick={incrementSalad}>+</button>
                    <input type="number" value={saladCount*6}  />
                </li>
                <li>
                    Pasta: {pastaCount}
                    <button onClick={decrementPasta}>-</button>
                    <button onClick={incrementPasta}>+</button>
                    <input type="number" value={pastaCount*12}  />
                </li>
            </ul>
            Total:{pizzaCount*10+burgerCount*8+saladCount*6+pastaCount*12}
        </div>
    );
}

export default Test;
// MyComponent.js

// import { useState } from 'react';
// import React from 'react';
// import FoodData from './FoodData';

// // const [increment,setIncrement]=useState(0)
// // const [decrement,setDecrement]=useState(increment)
// // const add=()=>{
// //     setIncrement+1
// // }
// // const sub=()=>{
// //     setDecrement(decrement-1)
// // }
// function TestFood() {
//     const [increment,setIncrement]=useState(0)
//     // const [decrement,setDecrement]=useState(increment)
   
//     const increase=()=>{
//       setIncrement(increment+1)
//     }
//     const decrease=()=>{
//         setIncrement(increment-1)
//     }

//   return (
//     <div>
//       <h2>Food Menu</h2>
//       <ul>
//         {FoodData.map((food, index) => (
//           <li key={index}>
//             {food.name}: ${food.price}
//           </li>
//         ))}
//       </ul>
//       <ul>
        
//         <li> Pizza{increment} <button onClick={decrease} >-</button><button onClick={increase}>+</button><input value={increment*10}></input></li>
//         <li>Burger <button >-</button> <button onClick={increase}>+</button> <input ></input></li>
//         <li> Salad <button>-</button> <button>+</button> <input ></input></li>
//         <li> Pasta <button>-</button> <button>+</button> <input></input></li>
//       </ul>

//     </div>
//   );
// }

// export default TestFood;
