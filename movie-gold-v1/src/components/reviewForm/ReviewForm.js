import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ReviewForm = ({handleSubmit,revText,labelText,defaulValue}) => {
    
  return (
    <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaulValue}/>
            <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
        </Form.Group>
    </Form>
  )
}

export default ReviewForm
