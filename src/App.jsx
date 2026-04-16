import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [card, setCard] = useState([]);
  return (
    <div className=''>
      <Navbar card={card}></Navbar>
      <Home setCard={setCard} card={card}></Home>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
