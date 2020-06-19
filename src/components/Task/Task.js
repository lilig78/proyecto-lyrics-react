import React, { useState } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";


const Task = ({ id, artist, ranking, done, lyrics, songtittle, gT, isDetail}) => {
  const [ check, setCheck ] = useState(done);
  const url = `https://primercintaroja.firebaseio.com/task/${id}.json`;

  // definición, aquí no se ejecuta.
  const handleChange = () => {
    const body = {
      "isDone": !check
    }
    axios.patch(url, body)
    .then(({ data }) => {
      setCheck(data.isDone)
    })
  }
  // definición, acá no se ejecuta.
  const eliminar = () => {
    axios.delete(url)
    .then(()=>{
      if (isDetail) {

      }
      else {
        gT();
      }
      
    })
  };

  return (
    <div className="card px-4 py-2">
        <h4><span className="badge badge-primary">{ranking}</span> {artist}  {songtittle}.</h4>
        {
          isDetail
          ?
          <div> {lyrics} </div> 
          : <Link to = {`/lyrics/${id}`}> Ver Cancion </Link>
        }
        <div className="form-check">
          <input
          className="form-check-input" 
          type="checkbox" 
          value=""
          checked={check}
          onChange={handleChange}
          id={id}/>
          {/* <label className="form-check-label" htmlFor={id}>
            Realizado es {lyrics} horas.
          </label> */}
          <button type="button" onClick={() => {
            alert('Se eliminó la Cancion', id);
            eliminar();
          }} className="btn btn-danger">Eliminar</button>
        </div>
        
        
    </div>
  );
};

export default Task;