import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartItemsActions } from '../../store/cartItemsSlice'

const CartItem = (props) => {
  const { title, total, price, id, quantity } = props.item;

  const dispatch = useDispatch();

  const incrementCounterHandler = () => {

    dispatch(cartItemsActions.addItemstoCart({
      id,
      title,
      price
    }))
  }


  const decrementCounterHandler = () => {

    dispatch(cartItemsActions.removeItemsFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrementCounterHandler}>-</button>
          <button onClick={incrementCounterHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
