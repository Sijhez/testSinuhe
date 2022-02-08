import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <>
       <p>Este es el header</p>
     <ul>
         <li>
             <Link to='/productos'>Ver Productos</Link></li>
             <li><Link to='/'>Home</Link></li>
         
     </ul>
      </>
  );
};

export default Header;
