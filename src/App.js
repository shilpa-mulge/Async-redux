import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { UiActions } from './store/uiSlice';
import Notification from './components/UI/Notification';
let isInitail=true;

function App() {
  const isShown=useSelector(state=>state.ui.isShown)
  const dispatch=useDispatch()
const cart=useSelector(state=>state.cart)
const notification=useSelector(state=>state.ui.notification)
console.log(notification)
useEffect(()=>{
  const sendCartItemS=async()=>{
    dispatch(UiActions.shownotifiaction({
      status:'pending',
      title:'Sending.....',
      message:'Sending cart data!',
    }))
const response=await fetch("https://expense-tracker-b91f4-default-rtdb.firebaseio.com/cart.json",{
  method:'PUT',
  body:JSON.stringify(cart)
})
 
if(!response.ok){
throw new Error("Sending cart data faild!")
}
dispatch(UiActions.shownotifiaction({
  status:'Success',
  title:'Success!',
  message:'Sent cart data Successfuly!',
}))
}
if(isInitail){
  isInitail=false;
  return;
}

sendCartItemS().catch(error=>{
  dispatch(UiActions.shownotifiaction({
    status:'error',
    title:'Error',
    message:'Sending cart data Faild!',
  }))
})
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
