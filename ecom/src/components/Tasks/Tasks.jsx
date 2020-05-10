import React, { Component } from 'react'
import taskslist from '../../Sample/taskslist.json'


class Tasks extends Component {

    state = {
        
        tasks : taskslist
      }

    render() {
        return (
            <div>

                {this.state.tasks.map( task => <div key={task.id}>

                <h1>{task.title}</h1>
                <p>{task.description}</p>

                </div>)}

            </div>
        )
    }
}

export default Tasks;