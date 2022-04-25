import React from 'react';
import { useState } from 'react';
import { Router } from 'react-router-dom';
import HeaderContainer from './HeaderContainer.jsx';
import Products from "./Products.jsx"

function Main() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
function handleClick(e){
  if (e.target.id === 'loginButton'){
    console.log(document.querySelector('#usernameInput'))
    const username = document.querySelector('#usernameInput').value;
    const password = document.querySelector('#passwordInput').value;

    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      setLoggedIn(data.isLoggedIn);
    })
    .catch(err => console.logged('error in fetch request', err));
  }


  if (e.target.id === 'signUpButton'){
    const username = document.querySelector('#usernameInput')
    const password = document.querySelector('#passwordInput')
  }
}

  return (
    <div>
      <Router>
        <HeaderContainer handleClick = {handleClick} isLoggedIn = { isLoggedIn }/>   
        <Route path='/knives/knives' element={<Products />} />
     </Router>
    </div> 
  )
}

export default Main;