import React from 'react';
import Form from 'react-bootstrap/Form';
import './RecipeForm.css';

const RecipeForm: React.FC = () => {
    return <Form>
    <Form.Group>
    <Form.Control size="lg" type="text" placeholder="Title" />
  <br />
  <Form.Label>Ingredients</Form.Label>
    <Form.Control as="textarea" rows={3} />
    <br />
    <Form.Label>Instructions</Form.Label>
    <Form.Control as="textarea" rows={3} />
    <br />
      <Form.File id="exampleFormControlFile1" label="Example file input" />
    </Form.Group>
  </Form>

}

export default RecipeForm;