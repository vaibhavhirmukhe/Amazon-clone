import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './Context/StateProvider';
import Payment from './Components/Payment';
import Footer from './Components/Footer';

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
 
    auth.onAuthStateChanged(authUser => {
      //console.log("The user is >>> ",authUser);

      if(authUser){
        //the user just logged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    // eslint-disable-next-line
  }, [])
  
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header/>, <Home/>]}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/checkout" element={[<Header/>, <Checkout/>]}/>

          <Route path="/payment" element={[<Header/>, <Payment/>, <Footer/>]}/>
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
