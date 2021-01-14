import React, { useState } from 'react';
import Form from './Form'

const Main = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dataOutput, setDataOutput] = useState([])
    const [updateOutput, setUpdateOutput] = useState({})
    
    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        // create object to store user input
        const dataObj = {
            title: title,
            description: description,
        }
        // append the new object to the array in state
        setDataOutput([...dataOutput, dataObj])
        // clear the form input
        setTitle('')
        setDescription('')
    }

    /*
    update data
    reuse the form
    create a function that holds the state object of inputs
    
    
    */
   const handleUpdate = (e) => {
       e.preventDefault()
    //    update code...

   }

    // removes list items
    const handleRemoveItem = (arrayItem) => {
        const list = dataOutput.filter(currentItem => ( currentItem !== arrayItem ) )
        console.log(list)
        setDataOutput(list)
        
    }

    // loop through the array to render on the screen
    const mapData = dataOutput.map((obj, i) => {
        console.log(obj)
        return (
            <div key={i} className="map-container">
                <div className="content-container">
                    <h3>{obj.id} {obj.title}</h3>
                    <h3>{obj.description}</h3>
                    <button className="delBtn" onClick={() => handleRemoveItem(obj)}>Remove</button>
                </div>
    
            </div>
            )
        })


    return (
        <main>
            <Form 
                title={title}
                description={description}
                handleSubmit={handleSubmit}
                setTitle={setTitle}
                setDescription={setDescription}
                />
            {mapData}
        </main>
    );
}

export default Main;