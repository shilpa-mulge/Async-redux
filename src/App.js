import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import Notification from './components/UI/Notification';
import { sendGetRequest, sendRequest } from './store/cartRducer';
let isInitail=true;

function App() {
  const isShown=useSelector(state=>state.ui.isShown)
  const dispatch=useDispatch()
const cart=useSelector(state=>state.cart)
const notification=useSelector(state=>state.ui.notification)
useEffect(()=>{
dispatch(sendGetRequest())
},[dispatch])


useEffect(()=>{
if(isInitail){
  isInitail=false;
  return;
}
if(cart.changed){
dispatch(sendRequest(cart))
}
},[cart,dispatch])
  return (
    <>
    <Layout>
      {notification && <Notification satus={notification.status} title={notification.title} message={notification.message}/>}
     {isShown && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
