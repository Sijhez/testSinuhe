import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./components/layout"
import Home from "./components/Home";
import Clothes from "./components/Store/Clothes"
import SingleProduct from "./components/Store/Single/index"
import StoreState from "./context/Store/StoreState";
export default function Router(){

    return(
        <StoreState>
        
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}> 
           <Route index element={<Home/>}/>
           <Route path="/productos" element={<Clothes/>}/>
           <Route path="/productos/:id" element={<SingleProduct/>}/>
        </Route>
        </Routes>
        </BrowserRouter>

        </StoreState>
        
    )

}