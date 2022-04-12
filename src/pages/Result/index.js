import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForm, Result } from '../../components';
import { getResult } from '../../action';

function Search(){
    const dispatch = useDispatch();
    const result = useSelector(state => state.result);
    const UserName = useSelector(state => state.UserName);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)
    
    const search = searchTerm => dispatch(getResult(searchTerm));

    const renderResult = (e) => loading ? <p>Loading . . .</p> : <Result result={e}/>

    

    return (
        <div id="search">
            Search A User:
            <SearchForm getResult={search}/>

            <h1>{UserName}</h1>

            { error ? <p>Oops there's been an error! {error}</p> : result.map( element => renderResult(element)) }   
            
        </div>
    );

}

export default Search;