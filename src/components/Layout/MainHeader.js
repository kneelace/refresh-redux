import { useDispatch, useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { authActions } from '../../store/authSlice';

const MainHeader = (props) => {

  const authToggle = useSelector(state => state.authentication.isAuthenticated)
  const dispatch = useDispatch();


  const logoutHandler = () => {
    dispatch(authActions.toggleAuth())
  }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
          {authToggle && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
