import React, { useState } from 'react';
 
const Form = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState(0)
    const [dataOutput, setDataOutput] = useState([])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        // create object to store user input
        const dataObj = {
            id: id,
            title: title,
            description: description,
        }
        // increment the id for each object
        setId(
             id + 1 
        )
        // append the new object to the array in state
        setDataOutput([...dataOutput, dataObj])
        // clear the form input
        setTitle('')
        setDescription('')
    }
    console.log(dataOutput)
         // remove object from array in state
        const removeItem = (itemID) => {
            for (let i = 0; i < dataOutput.length; i++) {
                let indexOfArray = dataOutput.indexOf([i])
                console.log(i)
    
                if (id.value !== itemID.value) {
                   let newArray = dataOutput.splice(indexOfArray)
                   setDataOutput(newArray)
                }
            }
           
        }

    

    // loop through the array to render on the screen
    const mapData = dataOutput.length !== 0 ? dataOutput.map((obj, i) => {
        console.log(id)
// FIX THIS BUG MAP AND DELETE ITEM 
   
    const mapItem =dataOutput.length !== 0 && dataOutput[i] === obj.id ? dataOutput.map((item, i) => {
        return (
            <div key={i} className="map-container">
                <div className="content-container">
                    <h3>{obj.id} {obj.title}</h3>
                    <h3>{obj.description}</h3>
                    {/* work on  delete button */}
                    <button className="delBtn" onClick={() => removeItem(obj.id)}>Remove</button>
                </div>
    
            </div>
            )
        }) : null

        return (
            <div>

            </div>
        )

    }) : null

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Title: <input 
                    type="text" 
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />

                Description: <textarea 
                    type="text" 
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    />

                    <button type="submit">Submit</button>
            </form>

            {mapData}

        </div>
    )
}

export default Form;