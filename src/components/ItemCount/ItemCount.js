import { useState } from 'react';

const ItemCount = ({ initial = 1, stock = 0, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const decrement = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}> - </button>
            <p> { count } </p>
            <button onClick={increment}> + </button>
            <button onClick={()=> onAdd(count)}> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount;