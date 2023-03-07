import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cart=useSelector(state=>state.cart.cart)
  const totalQuantity=cart.reduce((cur,pre)=>(
    cur+=pre.amount
  ),0)
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
