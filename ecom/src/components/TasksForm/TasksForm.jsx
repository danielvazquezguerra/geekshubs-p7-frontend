import React from 'react'
import './TasksForm.scss'

const TasksForm = () => {

    const onSubmit = event => {
        console.log('Enviando')
        event.preventDefault() 
    }

    const onChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <form action="" onSubmit={onSubmit} className="form">
            <input type="text" placeholder="Write a task" onChange={onChange}/>
            <textarea placeholder="Escribe una descripcion" onChange={onChange}></textarea>
            <button type="submit">ENVIAR</button>
        </form>
    )
}

export default TasksForm;