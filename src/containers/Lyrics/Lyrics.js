import React, { useState, useEffect} from 'react';
import axios from 'axios'; 
import Task from './../../components/Task/Task';
import {
    useParams, Link
  } from "react-router-dom";


const Lyrics = () => {
    // destructruacion de variable que devuelve UseParams 
    const {id}= useParams();
    const [idParams, setIdParams ] = useState(id);
    const [cancion, setCancion] = useState({});
    const url = `https://primercintaroja.firebaseio.com/task/${idParams}.json`;

    // Se esta definiendo la funcion getLyrics
    const getLyrics = ()=>{
        axios.get(url)
        .then(({ data }) => {
        setCancion(data)

        });

    };
    // callback
    useEffect(()=>{
        // Usando la funcion getLyrics
        getLyrics()
    },[]);

    return(
       <div className="mx-5 px-5 my-3 py-3"> 
       <h1>Letra de la Cancion</h1>
           { cancion.artist 
        ? <Task
        className="mx-4"
        artist={cancion.artist} 
        ranking={cancion.ranking}
        done={cancion.isDone}
        lyrics={cancion.lyrics}
        songtittle={cancion.songtittle}
        id={idParams}
        isDetail={true}
        
        />
        :<h3>Cargando</h3>
}
     <Link to="/historial"> <button type="button" 
      className="btn btn-success">Volver</button></Link>
       </div>
    )
};

export default Lyrics;