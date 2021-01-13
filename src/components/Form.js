import React, { useState } from 'react';
 
const Form = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState(1)
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

    // loop through the array to render on the screen
    const mapData = dataOutput.length !== 0 ? dataOutput.map((obj, i) => {
        dataOutput.filter(deleteItem)
        // figure out logic to delete the certian objects

        return (
            <div key={i} className="map-container">
                <div className="content-container">
                    <h3>{obj.id}: {obj.title}</h3>
                    <h3>{obj.description}</h3>
                    {/* work on button */}
                    <button className="delBtn" onClick={() => }>Remove</button>
                </div>

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