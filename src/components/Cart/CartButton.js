import { uiActions } from '../../store/uiSlice';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';



const CartButton = (props) => {

  const showCartToggle = useSelector(state => state.authentication.isAuthenticated)
  const cartQuantity = useSelector(state => state.cartItems.totalQuantity);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <>
      {showCartToggle && < button className={classes.button} onClick={toggleCartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{cartQuantity}</span>
      </button >}
    </>
  );
};

export default CartButton;
