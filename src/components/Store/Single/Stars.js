//el componente Stars incluye una librería de npm llamada react-simple-star-rating
import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

function Stars({...props}){
    const [rating, setRating] =useState(0)
    //recibo props en una variable local
    const initialValue = props.dataValue
    const votosCount = props.votos
    //manejo el handleRating integrando el valor recibido como parametro
    const handleRating = (initialValue)=>{
        setRating(initialValue)
    }
   
    useEffect(()=>{
        handleRating(initialValue)  
    },[])
   
    return(
        <>
          <span><i>{votosCount} votos</i></span>
          <Rating showTooltip={false} allowHalfIcon={true} readonly={true} ratingValue={initialValue*20}/>
        </>
    )
}

export default Stars