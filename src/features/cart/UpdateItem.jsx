import { useDispatch } from "react-redux"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItem ({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center ml-36">
           <button className="btn" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</button>
          <p className="font-semibold">
             {currentQuantity}
            </p>
           <button className="btn" onClick={() =>  dispatch(increaseItemQuantity(pizzaId))}>+</button>
        </div>
    )
}