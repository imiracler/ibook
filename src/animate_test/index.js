import { useState } from "react";
import {useAutoAnimate } from '@formkit/auto-animate/react';


const App = function() {
    const [items, setItems] = useState([ "🍓 Strawberry",
    "🥥 Coconut",
    "🥝 Kiwi",
    "🍇 Grape",
    "🍉 Watermelon",
    "🍐 Pear",
    "🍑 Peach",
    "🍊 Orange",
    "🥭 Mango"]);

    const randomize = () => {
        items.sort(() => (Math.random() > 0.5 ? 1 : -1));
        setItems([...items]);
    } 

    const [parent] = useAutoAnimate();

    return (
        <div>
            <ul ref={parent}>
                {items.map(
                    item => <li key={item}>{ item }</li>
                )}
            </ul>
            <button onClick={randomize}>randomize</button>
        </div>
    )
}

export default App;