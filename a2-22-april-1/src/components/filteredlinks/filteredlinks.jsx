import { Button } from '@material-ui/core';
import React, { useReducer } from 'react'
import visibilityReducer from '../../reducer/visibilityReducer'

const Filteredlinks = (props) => {
  const [state, dispatch] = useReducer(visibilityReducer, props.state)

  return (
        <div >
            <Button variant="contained"
              color="primary"
              style={{textDecoration:'none', color:'white',margin: "25px 5px 20px 10px"}}
       onClick={(e) => {
         e.preventDefault();
         dispatch({type: 'SET_VISIBILITY_FILTER',filter:props.filter});
       }}
    >
      {props.children}
    </Button>
           
        </div>
    )
}



export default Filteredlinks;
