import React, {useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../../context/Store/StoreContext';

function Clothes() {
    //generamos contexto
    const ctx = useContext(StoreContext)
    const {productos, getProductos}= ctx
    useEffect(()=>{
        getProductos()
    },[])
    
    
  return (
    <><h1>Aqui los productos</h1>
       
       <ul>
         {  
             productos.map((producto, index)=>{
                return(
                    <>
                    <Link to= {`/productos/${producto.id}`}>
                     <li key={index}> {producto.title}</li>
                     </Link>
                    </>
                )
               
            })
         }
       </ul>
    </>
  );
}

export default Clothes;
