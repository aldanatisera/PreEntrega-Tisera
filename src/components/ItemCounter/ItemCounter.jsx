import { useState } from "react";

function ItemCounter({ init = 1, stock, onAdd }) {
  const [count, setCount] = useState(init);

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <h2 className="m-4">{count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      <button onClick={decrement}>+</button>
    </>
  );
}

export default ItemCounter;
