import axios from 'axios';

const loading = User => ({ type: 'LOADING', payload: User });



export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const Userdata = await fetchUser(searchTerm);
            dispatch({
                type:'LOAD_RESULT',
                payload: Userdata
            });
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};


// Helpers
const fetchUser = async searchTerm => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}/repos`);
        return data;
    } catch(err) {
        if (data.status === 404) { throw Error('That\'s not a valid capital city!') }
        throw new Error(err.message)
    }
}