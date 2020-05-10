import React, { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';
import TasksForm from './components/TasksForm/TasksForm';



class App extends Component {

  render() {

    return (
      <div className="App">
          <Header /> 
          <TasksForm />
          <Tasks />
      </div>
    )
  }


}

export default App;
