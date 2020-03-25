import React, { Component } from 'react';
import './SearchStudent.scss'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
class SearchStudent extends React.Component{
	constructor(){
		super();
		this.state = {
			students: []
		  }
	}


	  componentDidMount() {
        fetch('http://localhost:8080/students')
        .then(res => res.json())
        .then((data) => {
			console.log("test " + data)
          this.setState({ students: data })
        })
		.catch(console.log)
      }


    render(){
		const { students } = this.state;
        return(
                <Card className="container">
					<Card.Body>
					<input type="text" class="input-query" data-search-on-list="search" placeholder="Search name or last name..."/>
						<span class="counter" data-search-on-list="counter"></span>
						
						<ListGroup className="list" data-search-on-list="list">
						{students.map((student)=>(
						<ListGroup.Item>
							<a href="#">
							{student.name} {student.surname}, {student.br_indeksa}
							</a>
						</ListGroup.Item>
						))}
						</ListGroup>
					<Card.Link className="button-close" href="#" onClick={this.props.handleClose}>Close</Card.Link>
					</Card.Body>

				</Card>
            
        )
    }

}
export default SearchStudent