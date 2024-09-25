import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItem from "../cart/UpdateItem";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id))

  const isInCart = currentQuantity > 0;

  function handleAddToCart () {
    // console.log(id)
    const newItem = {
      pizzaId : id,
      name,
      quantity : 1,
      unitPrice,
      totalPrice : unitPrice * 1,
    }
    dispatch(addItem(newItem));

  }

  return (
    <li className="flex gap-4 py-2 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow ">
        <p className="font-medium">{name}</p>
        <p className="text-sm font-medium italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}

          {
            isInCart &&
            <div className="flex items-center gap-3 sm:gap-4">
              <UpdateItem pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          }

          {
            // !soldOut &&  <Button type="small" onClick={handleAddToCart}>Add to cart</Button>
            !soldOut && !isInCart && <button className="inline-block rounded-full bg-yellow-400 px-2 py-1 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300
            focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed" onClick={handleAddToCart}>
              Add to cart
            </button>
          }

         
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
