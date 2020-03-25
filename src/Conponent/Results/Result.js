import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import Text from './Results/Text';
import Audio from './Results/Audio'
class Result extends React.Component{
    constructor(){
		super();
		this.state = {
			result: []
		  }
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/result/student/20')
        .then(res => res.json())
        .then((data) => {
          this.setState({ result: data})
        })
        .catch(console.log)
      }


render() {
    const {result} = this.state;
    return (

        <Tabs defaultActiveKey="native">
            <Tab eventKey="native" title="Native">
                <Text name="ilija" res={result.nativeTranslate}></Text>
            </Tab>
            <Tab eventKey="foreign" title="Foreign">
                <Text name="biljana" res={result.foreignTranslate}></Text>
            </Tab>
            <Tab eventKey="audio" title="Audio"> 
                <Audio name="milica" res={result.audioTranslate}></Audio>
            </Tab>                 
        </Tabs>
    )
  }
}

export default Result