const reducer = (globalState, action)=>{
   switch(action.type){
    case "GET_PRODUCTOS":
        return{
            ...globalState,
            productos:action.payload
        }
    case "GET_SINGLE":
            return{
                ...globalState,
                unProducto:action.payload
            }
        default:
            return globalState
   
   }
}
export default reducer