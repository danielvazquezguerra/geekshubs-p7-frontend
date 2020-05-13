import React from 'react'
import PropTypes from 'prop-types'
import './Tasks.scss'


const Task = (props) => {

    Task.propTypes = {

        task: PropTypes.object.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        done: PropTypes.bool

    }

    const { task } = props

    const getDone = () => {
        return {
            color: props.task.done ? 'gray':'green'
        }
    }

    return (

        
        <div className="card" style={getDone()}>

                <p>{task.id}</p>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                {task.done}

            
        </div>
    )
}

export default Task;
