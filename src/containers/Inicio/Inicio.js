import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return(
        <div class="d-flex flex-column align-items-center">
            <img src="https://http.cat/202" alt="202"></img>
            {/* <h1>401</h1> */}
            <h2>Sorpresa</h2>
            <Link to="/create"> BIENVENIDO AL INICIO</Link>
        </div>
    )
}

export default Inicio;
