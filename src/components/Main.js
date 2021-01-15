import React, { useState } from 'react';
import Form from './Form'

const Main = () => {

    const inputObj = {
        title: '',
        description: '',
    }
    const [input, setInput] = useState(inputObj)
    const updateInputObj = {
        title: '',
        description: '',
    }
    const [updateInput, setUpdateInput] = useState(updateInputObj)
    const [dataOutput, setDataOutput] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [buttonValue] = useState('Add Task')
    const [updateButtonValue] = useState('Update Task')
    const [id, setId] = useState(0)
    

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        // create object to store user input
        const dataObj = {
            id: id,
            title: input.title,
            description: input.description,
            isActive: false
        }
        // append the new object to the array in state
        setDataOutput([dataObj, ...dataOutput])
        // clear the form input
        setInput({
            title: '',
            description: ''
        })
        setId(id + 1)
    }

    // handles all inputs
    const handleChange = (e) => {
        if (isClicked === true) {
            const { name, value } = e.target
            // handle the update task data
            setUpdateInput(prev => ({
                ...prev,
                [name]: value
            }))
        } else if (isClicked === false) {
            const { name, value } = e.target
            // handle the add task data
            setInput(prev => ({
                ...prev,
                [name]: value
            }))
        }

    }   

   
    // update form
   const handleUpdate = (updateThisInput) => {
    //    updates the th current value
    
        const updateData = {
            id: id,
            title: updateInput.title,
            description: updateInput.description,
            isActive: false
        }
        let index = dataOutput.findIndex(item => (item !== updateThisInput) || (item === updateThisInput))

        if (updateThisInput !== index || updateThisInput === index){
            dataOutput[updateThisInput] = updateData
            setDataOutput([...dataOutput])
        }        
        setIsClicked(false)
        setUpdateInput({
            title: '',
            description: ''
        })

   }

    // removes list items
    const handleRemoveItem = (arrayItem) => {
        const list = dataOutput.filter(currentItem => ( currentItem !== arrayItem ) )
        setDataOutput(list)
        
    }

   

    // loop through the array to render on the screen
    const mapData = dataOutput.map((obj, i) => {
        console.log(dataOutput)
        console.log(obj.isActive)

        const targetItem = (itemId) => {
            setIsClicked(true)
            if (obj.id === itemId) {
                obj.isActive = true
            }
            
        }

       
        return (
            <div key={i} className="map-container">
                {/* render the task data */}
                <div className="content-container">
                    <h3>{obj.title}</h3>
                    <h3>{obj.description}</h3>
                    <button className="delBtn" onClick={() => handleRemoveItem(obj)}>Remove</button>
                    <button className="updateBtn" onClick={() => targetItem(obj.id)}>Edit</button>

                </div>
              
                {isClicked === true && obj.isActive === true ?
                <>
                <Form 
                    title={updateInput.title}
                    description={updateInput.description}
                    handleSubmit={() => handleUpdate(i)}
                    handleChange={handleChange}
                    buttonValue={updateButtonValue}
                    labelTitle='Update Title'
                    labelDescription='Update Description'
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />
                  
                </>
                : console.log('broke')}
    
            </div>
            )
        })

    return (
        <main>
            <Form 
                title={input.title}
                description={input.description}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                buttonValue={buttonValue}
                labelTitle='Title'
                labelDescription='Description'
               
                />
            {mapData}
            
        </main>
    );
}

export default Main;