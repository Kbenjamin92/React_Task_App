import React, { useState } from 'react';
import Form from './Form'

const Main = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dataOutput, setDataOutput] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [buttonValue] = useState('Add Task')
    const [updateButtonValue] = useState('Update Task')

    
    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        // create object to store user input
        const dataObj = {
            title: title,
            description: description,
        }
        // append the new object to the array in state
        setDataOutput([dataObj, ...dataOutput])
        // clear the form input
        setTitle('')
        setDescription('')
    }

   
    // update form
   const handleUpdate = (updateInput) => {
    //    e.preventDefault()
    //    update code...
        const updateData = {
            title: title,
            description: description,
        }
        let index = dataOutput.findIndex(item => (item !== updateInput) || (item === updateInput))

        if (updateInput !== index || updateInput === index){
            console.log(updateInput)
            console.log(index)
            dataOutput[updateInput] = updateData
        }
        
        setTitle('')
        setDescription('')
        setIsClicked(false)

   }

    // removes list items
    const handleRemoveItem = (arrayItem) => {
        const list = dataOutput.filter(currentItem => ( currentItem !== arrayItem ) )
        console.log(list)
        setDataOutput(list)
        
    }

    const testIndex = (i) => {
        console.log(i)
    }

    // loop through the array to render on the screen
    const mapData = dataOutput.map((obj, i) => {
        console.log(i)
        console.log(obj)


        return (
            <div key={i} className="map-container">
                <div className="content-container">
                    <h3>{obj.title}</h3>
                    <h3>{obj.description}</h3>
                    <button className="delBtn" onClick={() => handleRemoveItem(obj)}>Remove</button>
                    <button className="updateBtn" onClick={() => setIsClicked(true)}>Edit</button>
                    {/* <button className="updateBtn" onClick={() => handleUpdate(i)}>Test</button> */}

                {isClicked && obj === i ?
                <>
                <Form 
                    title={title}
                    description={description}
                    handleSubmit={() => handleUpdate(i)}
                    setTitle={setTitle}
                    setDescription={setDescription}
                    buttonValue={updateButtonValue}
                    labelTitle='Update Title'
                    labelDescription='Update Description'
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    />
                </>
                : null}

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
            
        </main>
    );
}

export default Main;