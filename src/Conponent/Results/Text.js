import React from 'react';
import Card from 'react-bootstrap/Card'

const Text = props => (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Header>Original</Card.Header>
            <Card.Text>
                {props.res}{/* props original text */}
            </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Header>Translate</Card.Header>
            <input>
            {}{/* props prevedeni text */}
            </input>
            <Card.Link href="#">Undo</Card.Link>
            <Card.Link href="#">Reset</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );

export default Text