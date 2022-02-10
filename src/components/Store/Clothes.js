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
<div key={index} className='col-lg-4 text-center'>

<div key={index} className="card" style={{width:'100%'}}>
<Link to= {`/productos/${producto.id}`}>
<div className='photoContainer'>
  <img src={producto.image}
  style={{width:'120px', height:'auto'}}
  className="card-img-top" alt={producto.title}/>
</div>
  </Link>
  <div className="card-body">
    <h5 className="card-title">$ {producto.price}</h5>
    <p className="card-text">{producto.title}</p>
    <Link to= {`/productos/${producto.id}`}>
    <button  className="btn btn-primary">
     Ver producto
    </button>
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
