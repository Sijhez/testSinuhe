import React, {useEffect, useContext} from 'react';
//importamos useEffect para usar los states
import { Link } from 'react-router-dom';
//importamos Link para navegación
import StoreContext from './../context/Store/StoreContext';
//importé storeContext para recibir contexto y usarlo en un reel pequeño de productos aleatorios


const Home = () => {
  //uso context de store
  const ctx = useContext(StoreContext)
  //genero el contexto, el primero es el estado a ser alterado, y el segundo es la funcion que lo va a alterar
  const {productos, getProductos}= ctx 
  //useEffect para 'mantener activo' el alterador
  useEffect(()=>{
      getProductos()
  },[])
  //uso un numero random
  const randomize = Math.ceil(Math.random()*15)
  //cortamos los productos recibidos con un splice, y usando el random previo
  const someProducts = productos.splice(randomize,3)
  
  return <>
{/* CARROUSEL */}
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height:'650px'}}>
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg"
       className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Los mejores descuentos de temporada</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>       
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg" 
      className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Variedad de estilos</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274360_1280.jpg"
       className="d-block w-100" alt="..."/>
       <div className="carousel-caption d-none d-md-block">
        <h1>Las últimas tendencias</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* END CARROUSEL */}
<br/>
<br/>

    <section>

    
      
         
         <article>
         <div className='container'>
        <div className='row'>
        <h1 className='text-center'>
           Bienvenido a la tienda
         </h1>

         <h3 className='text-center'>
           Conoce algunos de nuestros productos
         </h3>
         
         {  
           someProducts.map((producto, index)=>{
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
    <button href="#" className="btn btn-primary">
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
       
       <Link to='/productos' className="nav-link text-center">
       <button className='btn btn-primary'>
         Ver Todos los Productos
         </button>
         </Link>
       
         </div>
       </div>
         </article>
         
         
       </section>
    </>;
};

export default Home;
