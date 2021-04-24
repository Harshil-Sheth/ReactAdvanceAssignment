import React, { useState, useReducer,useEffect } from "react";
import {Grid, Paper, TextField, List, Button, Divider, ListItem, Checkbox, ListItemSecondaryAction, IconButton,} from "@material-ui/core";
import Todoheader from "./todoheader";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useFetch from "../../custom-hooks/useFetch";
import reducer,{initialState} from '../../reducer/reducer'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme)=>({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    // minWidth: 700,
  },
}));
const Todolist = () => {
  const classes = useStyles();
 

  
  const data = useFetch('https://jsonplaceholder.cypress.io/todos')
  useEffect(() => {
    const timer = setTimeout(() => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
              }, 1000); 
              return () => clearTimeout(timer);    
	
    }, [data]);
    
  const [state, dispatch] = useReducer(reducer,initialState)
  // console.log(initialState)



  const [input, setInput] = useState("");
  const[val,setval]=useState();


  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <Todoheader />
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={8} sm={7} md={6} lg={4}>
          <Paper
            style={{ margin: "0.5rem 0", padding: "0 1rem", display: "flex" }}
          >
            <TextField
              onChange={(e) => setInput(e.target.value)}
              value={input}
              margin="normal"
              label="Add New Todo"
              fullWidth
            />
            <Button
              onClick={() => {
                dispatch({ type: "ADD_TODO", text: input });
                setInput("");
              }}
              style={{ margin: "25px 0px 20px 10px" }}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </Paper>
          <Paper>
            <List style={{padding:'0px'}}>
            {state.loading ? <div className={classes.root}><CircularProgress /></div> : state.todos.map((todo) => (
                <React.Fragment key={todo.id} >
                    <ListItem  style={{ height: "64px" }}>
                    <Checkbox
					            	tabIndex={-1}
                        checked={todo.completed}/>
                    <TextField id="standard-basic" className='inputfield'  type="text" defaultValue={todo.title} onChange={(e)=>setval(e.target.value)}/>
                    
                    <ListItemSecondaryAction>
						<IconButton aria-label='Edit' >
							<EditIcon onClick={()=>dispatch({ type: "UPDATE_TODO", id:todo.id,text:val})} />
						</IconButton>
						<IconButton
							aria-label='Delete'
							>
							<DeleteIcon onClick={()=>dispatch({ type: "DELETE_TODO", id:todo.id})} />
						</IconButton>
					</ListItemSecondaryAction>
                  </ListItem>
          
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Paper>
          {/* <Paper style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
             <div style={{marginTop:15}}><p>Total Tasks: {visibleTodos.length}</p></div>
            <div >
              <Filteredlinks state={initialState.visibililtyFilter} filter="SHOW_ALL">All</Filteredlinks>
            </div>
            <div>
              {" "}
              <Filteredlinks state={initialState.visibililtyFilter} filter="SHOW_ACTIVE">Active</Filteredlinks>
            </div>
            <div>
              {" "}
              <Filteredlinks state={initialState.visibililtyFilter} filter="SHOW_COMPLETED">Completed</Filteredlinks>
            </div>
          </Paper> */}
        </Grid>
      </Grid>
    </Paper>
  );
};



export default Todolist;
