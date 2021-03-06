import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNumOfItem } from "../store/cart/selectors";
import { addToCart, rmFromCart } from "../store/cart/actions";

function Buttons(props) {
  const dispatch = useDispatch();
  const numOfItems = useSelector(selectNumOfItem(props.id));

  return (
    <div>
      <button
        className="buttons"
        onClick={() => dispatch(rmFromCart(props.id))}
      >
        -
      </button>
      {props.cart ? (
        <span>{numOfItems}x</span>
      ) : (
        <span>{numOfItems} in cart</span>
      )}
      <button className="buttons" onClick={() => dispatch(addToCart(props.id))}>
        +
      </button>
    </div>
  );
}

export default Buttons;
