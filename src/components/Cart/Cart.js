import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart=useSelector(state=>state.cart.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
{cart.map((item)=>(
 <CartItem id={item.id}
 title={item.title}  amount={item.amount} price={item.price} 
/>
))} 
      </ul>
    </Card>
  );
};

export default Cart;
