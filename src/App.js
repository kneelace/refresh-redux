import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import Auth from './components/Auth/Auth'

function App() {
  const toggleCart = useSelector(state => state.uiCart.showCart);
  const authToggle = useSelector(state => state.authentication.isAuthenticated)


  return (
    <Layout>
      {!authToggle && <Auth />}
      {authToggle && <>
        {toggleCart && <Cart />}
        {!toggleCart && < Products />}
      </>}

    </Layout>


  );
}

export default App;
