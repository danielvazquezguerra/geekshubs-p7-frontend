import React, { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';
import TasksForm from './components/TasksForm/TasksForm';
import Taskslist from './Sample/taskslist.json'



class App extends Component {

  state = {
    tasks: Taskslist
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length + 1
    }
    console.log(newTask)

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })

  }

  render() {
    
    return (
      <div className="App"> 
          <Header /> 
          <TasksForm addTask={this.addTask}/>
          <Tasks tasks={this.state.tasks} />
      </div>
    )
  }


}

export default App;
