import React, { useState } from 'react';
import FormComp from './FormComp'
import '../styles/Main.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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

        // render unique form for update
        const targetItem = (itemId) => {
            setIsClicked(true)
            if (obj.id === itemId) {
                obj.isActive = true
            }
        }
        // changes isActive to false again
        const updateTargetItem = (itemId) => {
            setIsClicked(false)
            if (obj.id === itemId) {
                obj.isActive = false
            }
        }

        return (

            <div key={i} className="map-container">
                {/* render the task data */}
                <Card className="content-container" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            {obj.title}
                        </Card.Title>
                        <hr/>
                        <Card.Text>
                            {obj.description}
                        </Card.Text>
                        <hr/>
                        <Button variant="danger" className="delBtn" onClick={() => handleRemoveItem(obj)}>Remove</Button>
                        <Button variant="warning" className="updateBtn" onClick={() => targetItem(obj.id)}>Edit</Button>
                    </Card.Body>
                </Card>
               
                
                {isClicked === true && obj.isActive === true ?
                <>
                <div className="form-header-container">
                    <h3 className="form-header">Update Task!</h3>
                </div>
                <FormComp 
                    title={updateInput.title}
                    description={updateInput.description}
                    handleSubmit={() => handleUpdate(i)}
                    handleChange={handleChange}
                    buttonValue={updateButtonValue}
                    labelTitle='Update Title...'
                    labelDescription='Update Description...'
                    isClicked={isClicked}
                    updateTargetItem={updateTargetItem}
                    id={obj.id}
                />
                  
                </>
                : null}
            </div>
            )
        })

    return (
        <main>
            <div className="form-header-container">
                <h3 className="form-header">Let's add some tasks to the list below!</h3>
            </div>

            <FormComp 
                title={input.title}
                description={input.description}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                buttonValue={buttonValue}
                labelTitle='Title...'
                labelDescription='Description...'
               
                />
            {mapData}
        </main>
    );
}

export default Main;