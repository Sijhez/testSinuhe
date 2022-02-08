//imports
import { useReducer } from "react";
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
           const getOneProducto = async(idProducto)=>{
           const response = await axiosClient.get(`/products/${idProducto}`)
           const productoSeleccionado = response.data
           
           //genero dispatch para alterar el estadoGlobal
           dispatch({
               type:"GET_SINGLE",
               payload:productoSeleccionado
           })

           }

        return(
       <StoreContext.Provider
       value={{
           productos:globalState.productos,
           unProducto:globalState.unProducto,
           getProductos,
           getOneProducto
       }}
       >
           {/* esto envía los children del value actualizado */}
           {props.children}
       </StoreContext.Provider>
   )
}

export default StoreState