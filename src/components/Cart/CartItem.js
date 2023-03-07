import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartactions } from '../../store/cartRducer';
const CartItem = (props) => {
const dispatch=useDispatch()
const removeHandler=()=>{
dispatch(cartactions.RemoveFromCart(props.id))
}
const AddHandler=()=>{
dispatch(cartactions.AddToCart({id:props.id,title:props.title,price:props.price,amount:1}))
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${props.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={AddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
