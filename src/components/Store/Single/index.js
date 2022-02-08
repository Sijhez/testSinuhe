import React, { useContext, useEffect } from 'react';
import StoreContext from '../../../context/Store/StoreContext';
import {useParams, Link} from 'react-router-dom'

function UnProducto() {
  const productCtx = useContext(StoreContext)
  const {getOneProducto, unProducto}=productCtx

 const params = useParams()
 const id = params.id

 useEffect(()=>{
     getOneProducto(id)
 },[])

  return <>

      <h1>Aqui la ropa escogida</h1>
      <h2>{unProducto.title}</h2>
            
  </>;
}

export default UnProducto;
