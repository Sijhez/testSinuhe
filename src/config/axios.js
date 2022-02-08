//importamos axios para conectar con API
import axios from "axios";
//generamos constante axiosClient para exportar conexion
const axiosClient = axios.create({
    baseURL:process.env.REACT_APP_BACKEND_URL
})
//exportamos:
export default axiosClient
