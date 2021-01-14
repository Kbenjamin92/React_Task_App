import React from 'react';

const Form = (props) => {
    
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                Title: <input 
                    type="text" 
                    name="title"
                    value={props.title}
                    onChange={e => props.setTitle(e.target.value)}
                    />

                Description: <textarea 
                    type="text" 
                    name="description"
                    value={props.description}
                    onChange={e => props.setDescription(e.target.value)}
                    />

                    <button type="submit">Add to list</button>
            </form>

        </div>
    )
}

export default Form;