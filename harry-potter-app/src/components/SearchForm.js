// import libraries
import { useState } from "react"

// import components
import setOptions from "../utils/setOptions"
import OptionInput from "./OptionInput"

export default function SearchForm(props) {
    const {books, characters} = props

    const [form, setForm] = useState({
        characterName: '',
        species: '',
        ancestry: '',
        gender: '',
        house: '',
        living: '',
        book: '',
    })

    function handleChange(event){
        // get the change event values
        const { name, value} = event.target

        //copy the form state and update it with the changes made
        const updatedForm = {
            ...form, 
            [name]: value
        }
        
        // set the state with the values from the updated copy
        setForm(updatedForm)
    }

    const choices = setOptions(books, characters)

    return (
        <form>
            <label htmlFor='name'>Name:</label>
            <input 
                type='text'
                name='name'
                id='name'
                onChange={handleChange}
                
            />
                                    
            <fieldset>
                <legend>Gender</legend>
                <input
                    type='radio'
                    name='gender'
                    value='male'
                    onChange={handleChange}
                />
                <label htmlFor='male'>Male</label>

                <input
                    type='radio'
                    name='gender'
                    value='female'
                    onChange={handleChange}
                />
                <label htmlFor='female'>Female</label>
            </fieldset>

            <input
                type='checkbox'
                id='alive'
                onChange={handleChange}
            />
            <label htmlFor='living'>Living</label>

            <OptionInput 
                options={choices}
                handleChange={handleChange} 
            />

        </form>
    )
}