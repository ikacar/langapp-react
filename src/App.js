import React from 'react';
import './App.css';
import SideBar from './Conponent/SideBar/SideBar'
import Exam from './Conponent/Exams/Exam'
import SearchStudent from './Conponent/Students/SearchStudent';
import NewExam from './Conponent/NewExam/NewExam'
import Results from './Conponent/Results/Results'

import { BrowserRouter as   Router, Route } from 'react-router-dom';

function App() {

  
  return (
    <div>
    <Router>
    <SideBar/>
      <Route path="/exams" component={Exam}/>
      <Route path="/students" component={SearchStudent}/>
      <Route path="/results" component={Results}/>
      <Route path="/createExam" component={NewExam}/>
    </Router>


    </div>
  );
}

export default App;
