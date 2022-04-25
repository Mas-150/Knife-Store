import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Products(props){
  return(
    <>
    <h1>In our products component</h1>
      <nav>
        <Link to="/knives/knives">Knives Page</Link>
      </nav>
    </>
  )
}

export default Products