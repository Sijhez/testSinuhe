import React, { useContext, useEffect } from 'react';
import StoreContext from '../../../context/Store/StoreContext';
import {useParams} from 'react-router-dom'
import Stars from './Stars';



function UnProducto() {
  const productCtx = useContext(StoreContext)
  const {getOneProducto, unProducto}=productCtx
  const params = useParams()
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
            <img width='350px' src={unProducto.image}/>
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

     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Debes iniciar sesion</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
       
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>

  </>;
}

export default UnProducto;
