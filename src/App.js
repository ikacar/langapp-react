import React from 'react';
import './App.css';
import SideBar from './Conponent/SideBar/SideBar'
import Exams from './Conponent/Exams/Exams'
import Exam from './Conponent/Exams/Exam'
import SearchStudent from './Conponent/Students/SearchStudent';
import NewExam from './Conponent/NewExam/NewExam'
import Results from './Conponent/Results/Results'
import Result from './Conponent/Results/Result'
import Particular from './Conponent/utils/Particular'

import { BrowserRouter as   Router, Route } from 'react-router-dom';
import Student from './Conponent/Students/Student';

 function App() {

//   const kontejner={
//     display:grid,
//     grid-template-columns:1fr 2fr
//   }

  return (
    <div>
    
    <Router>
    <SideBar>
      <Route path="/exams" component={Exams}/>
      <Route path="/students" component={SearchStudent}/>
      <Route path="/results" component={Results}/>
      <Route path="/createExam" component={NewExam}/>
      <Route path="/result" component={Result}/>
      <Route path="/exam" component={Exam}/>
      <Route path="/student" component={Student}/>

      </SideBar>
    </Router>


    </div> 
  );
}

export default App;
