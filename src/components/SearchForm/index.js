import React, { useState } from 'react';

function SearchForm({ getResult }) {

    const [ Username, setUserName ] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        getResult(Username);
        
    }

    const updateInput = e => {
        const input = e.target.value;
        setUserName(input);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={updateInput}/>
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;