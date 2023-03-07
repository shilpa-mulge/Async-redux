import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const cart=useSelector(state=>state.cart.cart);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
  <ProductItem
  id='e1'
    title='Test'
    price={6}
    description='This is a first product - amazing!'
  />
      </ul>
    </section>
  );
};

export default Products;
