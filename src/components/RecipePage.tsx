import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const RecipePage: React.FC = () => {
    return <>
    <h1>Pancakes</h1>
    <h3>Ingredients</h3>
    <ListGroup>
    <ListGroup.Item>Eggs</ListGroup.Item>
    <ListGroup.Item>Milk</ListGroup.Item>
    <ListGroup.Item>Flour</ListGroup.Item>
    <ListGroup.Item>Butter</ListGroup.Item>
    </ListGroup>
    <Form.Group>
        <br />
    <h3>Instructions</h3>

    <Form.Control type="text" placeholder="Instructions" />
    <br />
    </Form.Group>
</>
}

export default RecipePage;