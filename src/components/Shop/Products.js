
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products=[{
    id:'e1',
    title:'First Book',
    price:100
,   description:'This is my first book'
  },{
    id:'e2',
    title:'Second book',
    price:200,
  description:'This is my econd book'
  }]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map(item=>(
          <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} />
        ))}
  
      </ul>
    </section>
  );
};

export default Products;
