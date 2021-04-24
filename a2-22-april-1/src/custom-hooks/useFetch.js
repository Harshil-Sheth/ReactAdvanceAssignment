import {useState, useEffect} from 'react';

const useFetch = (link) =>{

    const[data, setData] = useState([]);
    useEffect(() =>{
        fetch(link)
        .then((response) => response.json())
        .then((json) => setData(json));
    },[link])

    return data;
}

export default useFetch;