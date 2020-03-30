import React, { useState } from 'react';
import TableTemp from '../utils/TableTemp'

class Exam extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch("https://studenti-1585498600097.azurewebsites.net/exam/all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        console.log(this.state);
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <TableTemp data={items}/>
                </div>
            )
        }
    }
}

export default Exam