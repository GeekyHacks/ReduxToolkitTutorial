import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/NavBar';
import CartContainer from './components/CartContainer';
import { calculateTotals } from './feature/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  const  {isOpen}  = useSelector((state) => state.modal);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
