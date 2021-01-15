import React, { useState } from 'react';
import Form from './Form'

const Main = () => {

    const inputObj = {
        title: '',
        description: '',
    }
    const [input, setInput] = useState(inputObj)
    const updateInputObj = {
        updateTitle: '',
        updateDescription: '',
    }
    const [updateInput, setUpdateInput] = useState(updateInputObj)
    const [dataOutput, setDataOutput] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [buttonValue] = useState('Add Task')
    const [updateButtonValue] = useState('Update Task')
    const [id, setId] = useState(0)
    const [addTaskIsClicked, setAddTaskIsClicked] = useState(false)
    const [updateTaskIsClicked, setUpdateTaskIsClicked] = useState(false)
    const [formInputNameTitle, setFormInputNameTitle] = useState('')
    const [formInputNameDesc, setFormInputNameDesc] = useState('')
    
    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()
        // create object to store user input
        const dataObj = {
            id: id,
            title: input.title,
            description: input.description,
        }
        // append the new object to the array in state
        setDataOutput([dataObj, ...dataOutput])
        // clear the form input
        setInput({
            title: '',
            description: ''
        })
        setId(id + 1)
        setAddTaskIsClicked(true)
    }

    // handles all inputs
    const handleChange = (e) => {
        const { name, value } = e.target
        if (isClicked) {
            // handle the update task data
            setUpdateInput(prev => ({
                ...prev,
                [name]: value
            }))
        } else if (isClicked === false) {
            // handle the add task data
            setInput(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }   

   
    // update form
   const handleUpdate = (updateThisInput) => {
    //    update code...
        const updateData = {
            id: id,
            updateTitle: updateInput.updateTitle,
            updateDescription: updateInput.updateDescription
        }
        let index = dataOutput.findIndex(item => (item !== updateThisInput) || (item === updateThisInput))

        if (updateThisInput !== index || updateThisInput === index){
            console.log(updateThisInput)
            console.log(index)
            dataOutput[updateThisInput] = updateData
            setDataOutput([updateData])
        }
        
        setIsClicked(false)
        setUpdateTaskIsClicked(true)
        setAddTaskIsClicked(false)
   }

    // removes list items
    const handleRemoveItem = (arrayItem) => {
        const list = dataOutput.filter(currentItem => ( currentItem !== arrayItem ) )
        setDataOutput(list)
        
    }
// change the name value for title in the form
    const changeEqualityOfNameTitle = () => {
        if (addTaskIsClicked) {
            setFormInputNameTitle('title')
            return formInputNameTitle
        } else if (updateTaskIsClicked) {
            setFormInputNameTitle('updateTitle')
            return formInputNameTitle
        }
    }
    // change the name value for description in the form
    const changeEqualityOfNameDesc = () => {
        if (addTaskIsClicked) {
            setFormInputNameDesc('description')
           return formInputNameDesc
        } else if (updateTaskIsClicked) {
            setFormInputNameDesc('updateDescription')
            return formInputNameDesc
        }
    }

    // loop through the array to render on the screen
    const mapData = dataOutput.map((obj, i) => {
        console.log(dataOutput)
        console.log(obj.updateTitle)
        console.log(obj.title)


        return (
            <div key={i} className="map-container">
                {/* render the task data */}
                 {addTaskIsClicked ? 
                <>
                <div className="content-container">
                    <h3>{obj.title}</h3>
                    <h3>{obj.description}</h3>
                    <button className="delBtn" onClick={() => handleRemoveItem(obj)}>Remove</button>
                    <button className="updateBtn" onClick={() => setIsClicked(true)}>Edit</button>

                </div>
                </>
            : null }

            {/* render the Update task data */}
            {updateTaskIsClicked ? 
                <>
                <div className="content-container">
                    <h3>{obj.updateTitle}</h3>
                    <h3>{obj.updateDescription}</h3>
                    <button className="delBtn" onClick={() => handleRemoveItem(obj)}>Remove</button>
                    <button className="updateBtn" onClick={() => setIsClicked(true)}>Edit</button>

                </div>
                </>
            : null }


                {isClicked && obj.id === dataOutput[i].id ?
                <>
                <Form 
                    updateTitle={updateInput.updateTitle}
                    updateDescription={updateInput.updateDescription}
                    handleSubmit={() => handleUpdate(i)}
                    handleChangeUpdate={handleChange}
                    buttonValue={updateButtonValue}
                    labelTitle='Update Title'
                    labelDescription='Update Description'
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                    changeEqualityOfNameTitle={changeEqualityOfNameTitle}
                    changeEqualityOfNameDesc={changeEqualityOfNameDesc}
                                     />
                </>
                : null}
    
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
                changeEqualityOfNameTitle={changeEqualityOfNameTitle}
                changeEqualityOfNameDesc={changeEqualityOfNameDesc}
               

                
                />
            {mapData}
            
        </main>
    );
}

export default Main;