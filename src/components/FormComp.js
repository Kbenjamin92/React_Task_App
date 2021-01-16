import React from 'react';
import '../styles/Form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


const FormComp = (props) => {
   
    
    return (
        <Container fluid className="container-form">
            
            <Form onSubmit={props.handleSubmit} className="form">
              <Form.Group>
              <Form.Control as="input" rows={3} 
                    className="title-field"
                    type="text" 
                    name="title"
                    value={props.title}
                    onChange={props.handleChange}
                    placeholder={props.labelTitle}
                    required
                    />
                </Form.Group>

                <Form.Group>
                <Form.Control as="textarea" rows={3}
                    className="desc-field"
                    type="text" 
                    name="description"
                    value={props.description}
                    onChange={props.handleChange}
                    placeholder={props.labelDescription}
                    required
                    />
                </Form.Group>


                <Button className="submit-btn" variant="success" type="submit">{props.buttonValue}</Button>
                {props.isClicked ? 
                <>
                <Button variant="danger" className="close-btn" onClick={() => props.updateTargetItem(props.id)}>Close</Button> 
                </>
                : null}
                   
            </Form>
                    

        </Container>
    )
}

export default FormComp;