import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './components/Auth/Auth'
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartItems } from './store/cartItemsSlice';
import { fetchCartItems } from './store/cartItemsSlice';

let isInitial = true;

function App() {
  const toggleCart = useSelector(state => state.uiCart.showCart);
  const authToggle = useSelector(state => state.authentication.isAuthenticated)

  const cart = useSelector(state => state.cartItems)

  const notification = useSelector(state => state.uiCart.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }

    if (cart.changed) {
      dispatch(sendCartItems(cart))
    }



  }, [cart, dispatch])


  return (
    <>
      {notification && <Notification
        title={notification.title}
        status={notification.status}
        message={notification.message}
      />}

      <Layout>

        {!authToggle && <Auth />}
        {authToggle && <>
          {toggleCart && <Cart />}
          {!toggleCart && < Products />}
        </>}

      </Layout>
    </>

  );
}

export default App;
