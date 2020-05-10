import React, { Component } from 'react'
import taskslist from '../../Sample/taskslist.json'
import './Tasks.scss'
import Task from './Task'


class Tasks extends Component {

    state = {
        
        tasks : taskslist
      }

    render() {

        return (

            <div className="Tasks">

                {this.state.tasks.map( task => <Task task={task} key={task.id} />)}
                
            </div>

        )
    }
}

export default Tasks;