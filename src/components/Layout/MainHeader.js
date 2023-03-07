import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { cartactions } from '../../store/cartRducer';
const MainHeader = (props) => {
  const dispatch=useDispatch();

  const CartShowHandler=()=>{
dispatch(cartactions.CartShowHandler())
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li onClick={CartShowHandler}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
