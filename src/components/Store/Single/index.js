import React, { useContext, useEffect } from 'react';
import StoreContext from '../../../context/Store/StoreContext';
import {useParams} from 'react-router-dom'
import Stars from './Stars';



function UnProducto() {
  const productCtx = useContext(StoreContext)
  const {getOneProducto, unProducto}=productCtx
  const params = useParams() //uso useParams para capturar id de la busqueda ingresada
 const id = params.id
 
 

 useEffect(()=>{
     getOneProducto(id)
 },[])

  return <>
      <div className='container'>
        <div className='productoInd row'>  
      <div className='col-lg-12'>
      
      </div>
          <div className='col-lg-4'>
            <img alt={unProducto.title} width='350px' src={unProducto.image}/>
          {/* Recibo dato del rating para transmitirlo al component stars */}
          </div>
          <div className='col-lg-6'>
          <h2>{unProducto.title}</h2>
          <Stars dataValue={unProducto.rating.rate} votos={unProducto.rating.count}/>
             <hr/>
             <b>Categoría:</b> <i>{unProducto.category}</i>
             <p>{unProducto.description}</p>

             <h3>$ {unProducto.price}</h3>
             <button type='button'
             data-bs-toggle="modal" data-bs-target="#exampleModal"
             className='btn btn-danger' id='myBoton' >Comprar</button>
          </div>



          </div>
      
     </div>   

     <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Fake login</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <p className='text-center'>
       Debes iniciar sesion
       </p>
      </div>
      <div className="modal-footer">
       
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Entendido</button>
      </div>
    </div>
  </div>
</div>

  </>;
}

export default UnProducto;
