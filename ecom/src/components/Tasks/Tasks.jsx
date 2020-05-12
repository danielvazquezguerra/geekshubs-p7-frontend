import React, { Component } from 'react'
import './Tasks.scss'
import Task from './Task'

class Tasks extends Component {

    render() {
        console.log(this.props.tasks)
        return (
            
            <div className="Tasks">

                {this.props.tasks.map( task => <Task task={task} key={task.id} />)}
               
                
            </div>

        )
    }
}

export default Tasks;