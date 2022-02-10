//imports
import {  useReducer } from "react";
import StoreContext from "./StoreContext";
import StoreReducer from "./StoreReducer"
//importamos axios client para efectuar async-await y solicitar data a la API
import axiosClient from "../../config/axios"

//Estado global de productos
const StoreState = (props)=>{
    //estado inicial de productos:
    const initialState = {
        productos:[],
        unProducto:{
            category:"",
            description:"",
            image:"",
            price:"",
            rating:{},
            title:""
        }
    }
    //uso de reducer para alterar estado global con dispatch:
    const[globalState, dispatch]=useReducer(StoreReducer, initialState)

    //generamos peticion con axios a API para mostrar productos   
            const getProductos = async()=>{
               
            const response = await axiosClient.get("/products")
            //generamos respuesta despues de realizada la consulta
            const productos = response.data
            
            //genero dispatch para alterar reducer con estado global
            dispatch({
                type:"GET_PRODUCTOS",
                payload:productos
            })
        }

       
   
 //generamos peticion para conseguir un elemento seleccionado:
             //capturamos el ID del producto, cuando se ejecute con useEffect en el componente
           const getOneProducto = async(idProducto)=>{
        //conseguido el id del producto, enviamos solicitud mediante axios client
           const response = await axiosClient.get(`/products/${idProducto}`)
           const productoSeleccionado = response.data //extraemos la data de la respuesta de los datos obtenidos
           
           //genero dispatch para alterar el estadoGlobal
           dispatch({
               type:"GET_SINGLE",
               payload:productoSeleccionado //especificar como cambiará el estado global a través del payload hacia el reducer
           })

           }

        return(
    //con esto proveemos contexto al componente, con el context previamente importado
       <StoreContext.Provider
       //invocamos los valores que estará recibiendo, y que se enviarán a reducer para alterar el estado global
       value={{
           productos:globalState.productos, //estados
           unProducto:globalState.unProducto,
           getProductos, //alteradores mediante funciones async / await
           getOneProducto
       }}
       >
           {/* esto envía los children del value actualizado */}
           {props.children}
       </StoreContext.Provider>
   )
}
//exportamos state
export default StoreState