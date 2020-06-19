import React, { useState, useEffect }from 'react';
import Task from './../Task/Task';
import { Link } from "react-router-dom";
import axios from 'axios';

const TaskManager = () => {
    // Estado
    const [ tasks, setTasks ] = useState({});
    // Iterar objeto, usabamos Object.keys(tasks) que me devolvia un arreglo.
    
    const getTasks = () => {
        axios.get('https://primercintaroja.firebaseio.com/task.json')
        .then(({data})=>{
            setTasks(data);
        })
    };
   
    // montar, renderizar, morir
    useEffect(() => {
       getTasks();
    }, []);

    return (
        <div className="card margenes">
            <div className="card-body">
                <h5 className="card-title">Mis Canciones</h5>
                <h6 className="card-subtitle mb-2 text-muted">Escuchar</h6>
                {
                    Object.keys(tasks)
                    .map((id) => <Task
                    className="mx-4"
                    gT={getTasks}
                    key={id}
                    artist={tasks[id].artist} 
                    ranking={tasks[id].ranking}
                    done={tasks[id].isDone}
                    lyrics={tasks[id].lyrics}
                    songtittle={tasks[id].songtittle}
                    id={id}
                    isDetail = {false}
                    />)
                }
            </div>
            {/*<a href></a> */}
            <Link to="/create">Buscar Cancion.</Link>
        </div>
    );
};

export default TaskManager;
