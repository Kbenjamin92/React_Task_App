import React from 'react';
import Button from 'react-bootstrap/Button';

const Form = (props) => {
    
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                {props.labelTitle}: <input 
                    className="title-field"
                    type="text" 
                    name="title"
                    value={props.title}
                    onChange={e => props.setTitle(e.target.value)}
                    />

                {props.labelDescription}: <textarea 
                    className="desc-field"
                    type="text" 
                    name="description"
                    value={props.description}
                    onChange={e => props.setDescription(e.target.value)}
                    />
                    <button type="submit">{props.buttonValue}</button>
                    {props.isClicked ? 
                    <>
                    <Button variant="danger" className="close-btn" onClick={() => props.setIsClicked(false)}>Close</Button> 
                    </>
                    : null}
                   
            </form>
                    

        </div>
    )
}

export default Form;