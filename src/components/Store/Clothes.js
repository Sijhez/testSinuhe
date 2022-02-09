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

    <>
    <div className='container'>
    <h1>Aqui los productos</h1>
    <div className='row'>

       {  
           productos.map((producto, index)=>{
              return(
                  <>
<div className='col-lg-4'>

<div key={index} className="card" style={{width:'18rem'}}>
  <img src={producto.image}
  style={{width:'150px'}}
  className="card-img-top" alt={producto.title}/>
  <div className="card-body">
    <h5 className="card-title">{producto.title}</h5>
    <p className="card-text">{producto.price}</p>
    <Link to= {`/productos/${producto.id}`}>
    <a href="#" className="btn btn-primary">
     Ver producto
    </a>
        </Link>
  </div>
</div>

</div>
                   
                  </>
              )
             
          })
       }
       
    </div>
    </div>
     </>
  );
}

export default Clothes;
