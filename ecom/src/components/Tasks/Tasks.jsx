import React, { Component } from 'react'
import taskslist from '../../Sample/taskslist.json'


class Tasks extends Component {

    state = {
        
        taskslist : taskslist
      }

    render() {
        return (
            <div>

                {this.state.taskslist.map( task => <div key={task.id}>

                <h1>{task.title}</h1>
                <p>{task.description}</p>

                </div>)}

            </div>
        )
    }
}

export default Tasks;