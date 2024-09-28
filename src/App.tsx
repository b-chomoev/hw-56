import './App.css';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import lettuceImage from './assets/lettuce.png';
import baconImage from './assets/bacon.png';
import {useState} from "react";
import Item from "./components/Items/Item.tsx";

interface Ingredient {
    name: string;
    price: number;
    image: string;
}

interface StateIngredient {
    name: string;
    count: number;
}

const INGREDIENTS: Ingredient[] = [
    {name: 'meat', price: 80, image: meatImage},
    {name: 'cheese', price: 50, image: cheeseImage},
    {name: 'lettuce', price: 10, image: lettuceImage},
    {name: 'bacon', price: 60, image: baconImage},
];

const App = () => {
    const [ingredients, setIngredients] = useState<StateIngredient[]>([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Lettuce', count: 0},
        {name: 'Bacon', count: 0},
    ]);
    const [total, setTotal] = useState(30);

    const getIngredName = (ingredName: string) => {
        console.log(ingredName);
    };

    return (
        <>
            {INGREDIENTS.map(ingred => (
                <Item onItemClick={() => getIngredName(ingred.name)} key={ingred.name} name={ingred.name} link={ingred.image} />
            ))}
        </>
    );
};

export default App;
