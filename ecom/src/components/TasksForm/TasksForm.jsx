import React, {Component} from 'react'
import './TasksForm.scss'

class TasksForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.addTask(this.state.title, this.state.description) 
    }


    onChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })

        }


    render() {
        
        return (
                
            <form className="form" onSubmit={this.onSubmit}>

                <input type="text" name="title" placeholder="Escribe una tarea" 
                onChange={this.onChange} value={this.state.title}/>

                <textarea name="description" placeholder="Escribe una descripcion de la tarea"
                onChange={this.onChange} value={this.state.description} />
                <input type="submit" />


            </form>


          
        )
    }
}

export default TasksForm;