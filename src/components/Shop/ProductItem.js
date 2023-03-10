import { useDispatch } from 'react-redux';
import { cartactions } from '../../store/cartRducer';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch=useDispatch()
  const { title, price, description } = props;
const AddToCartHandler=()=>{
dispatch(cartactions.AddToCart( {id:props.id, title:props.title, price:props.price, description:props.description, amount:1 }))
}
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={AddToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
