import React, { useState } from 'react';
import Form from './Form'

const Main = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dataOutput, setDataOutput] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [buttonValue] = useState('Add Task')
    const [updateButtonValue] = useState('Update Task')
    const [labelTitle] = useState('')
    const [labelDescription] = useState('')




    
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
    // update form
   const handleUpdate = (updateInput) => {
    //    e.preventDefault()
    //    update code...
        const updateData = {
            title: title,
            description: description,
        }
        if (dataOutput.includes(updateInput)) {
            const updateList = dataOutput.filter(obj => (obj === updateInput))
            setDataOutput([...dataOutput, updateList, updateData])
        }

        setTitle('')
        setDescription('')

   }

    // removes list items
    const handleRemoveItem = (arrayItem) => {
        const list = dataOutput.filter(currentItem => ( currentItem !== arrayItem ) )
        console.log(list)
        setDataOutput(list)
        
    }

    // loop through the array to render on the screen
    const mapData = dataOutput.map((obj, i) => {
        console.log(isClicked)
        return (
            <div key={i} className="map-container">
                <div className="content-container">
                    <h3>{obj.title}</h3>
                    <h3>{obj.description}</h3>
                    <button className="delBtn" onClick={() => handleRemoveItem(obj)}>Remove</button>
                    <button className="updateBtn" onClick={() => setIsClicked(true)}>Edit</button>

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
                buttonValue={buttonValue}
                labelTitle='Title'
                labelDescription='Description'
                
                />
            {mapData}
            {isClicked ?
            <>
            <Form 
                title={title}
                description={description}
                handleSubmit={handleUpdate}
                setTitle={setTitle}
                setDescription={setDescription}
                buttonValue={updateButtonValue}
                labelTitle='Update Title'
                labelDescription='Update Description'
                />
            </>
            : null}
        </main>
    );
}

export default Main;