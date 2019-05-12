import React, { Component } from 'react';
import Header from './components/shared/Header/header.component';
import Footer from './components/shared/Footer/footer.component';
import TaskManager from './components/TaskManager/taskManager.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Header />
          </div>
        </div>  
        <div className="row">
          <div className="col col-md-4">
            <TaskManager />
          </div>
        </div> 
        <div className="row">
          <div className="col">
            <Footer />
          </div>
        </div>              
      </div>
    );
  }
}

export default App;
