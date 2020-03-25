import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
class Exam extends React.Component{
	constructor(){
		super();
		this.state = {
			exams: []
		  }
	}
    componentDidMount() {
        fetch('http://localhost:8080/exams')
        .then(res => res.json())
        .then((data) => {
			console.log("exam strana " + data.audioText)
          this.setState({ exams: data })
        })
		.catch(console.log)
      }

    render(){
		const { exams } = this.state;
        return(
            <div>
                <Card className="container">
					<Card.Body>
                        <Card.Header>Exams</Card.Header>
						<ListGroup className="list" data-search-on-list="list">
						{exams.map((exam)=>(
						<ListGroup.Item>
							<a href="#">
							{exam.startDate} {exam.endDate}, {exam.status} , {exam.finished}
							</a>
						</ListGroup.Item>
						))}
						</ListGroup>
					{/* <Card.Link className="button-close" href="#" onClick={novi exam}>New</Card.Link> */}
					</Card.Body>

				</Card>
            </div>
        )
    }
    
}

export default Exam