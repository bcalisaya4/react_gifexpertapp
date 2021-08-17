import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    
    const handleinputChange = (e) =>{
        setinputValue(e.target.value);
    }
    const handleSubmint = (e) =>{
        e.preventDefault();
        //console.log('Submint hecho')
        if(inputValue.trim().length>2){
        setCategories(cats => [inputValue,...cats]);
        setinputValue('');
        }
    }
    

    return (
        <form onSubmit={handleSubmint}>    
            <input
                type="text"
                value={inputValue}
                onChange={handleinputChange}
            />

        </form>
    
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
