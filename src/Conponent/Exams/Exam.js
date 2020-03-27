import React, { Component, useState } from 'react';
import TableTemp from '../utils/TableTemp' 
import mockData from './data';
function Exam (){
	const [users] = useState(mockData);
	const cells = ['name','mail','index','exams','profiles'];
        return(
            <div>
				<TableTemp data={users} cells={cells}/>
            </div>
        )
    }

export default Exam