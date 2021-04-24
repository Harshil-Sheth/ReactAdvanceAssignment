import React, { useState, useReducer } from "react";
import {Grid, Paper, TextField, List, Button, Divider, ListItem, Checkbox, ListItemSecondaryAction, IconButton,} from "@material-ui/core";
import Filteredlinks from "../filteredlinks/filteredlinks";
import Todoheader from "./todoheader";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import reducer from '../../reducer/reducer'
import useFetch from "../../custom-hooks/useFetch";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
    default:
        return todos;
  }
};

let nextTodoId = 200;

const Todolist = () => {
  const data = useFetch('https://jsonplaceholder.typicode.com/posts')
  const initialState = {
    reducer:[],
    visibililtyFilter:'SHOW_ALL'
  }  
  const [state, dispatch] = useReducer(reducer, initialState.reducer)
  const visibleTodos = getVisibleTodos(state, initialState.visibililtyFilter);
  console.log(initialState.reducer, initialState.visibililtyFilter)
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
                dispatch({ type: "ADD_TODO", text: input, id: nextTodoId++ });
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
              {data.map((todo) => (
                <React.Fragment key={todo.id} >
                    <ListItem  style={{ height: "64px" }}>
                    <Checkbox
						tabIndex={-1}
                        checked={todo.completed}
                        onClick={() => dispatch({ type: "TOGGLE_TODO", id: todo.id })}
					
					/>
                    <TextField id="standard-basic" style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}  type="text" defaultValue={todo.title} onChange={(e)=>setval(e.target.value)}/>
                      {/* <span>{todo.title}</span> */}
                    {/* <ListItemText
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}
                      
                    >
                      {todo.text}
                    </ListItemText> */}
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
          <Paper style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
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
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};



export default Todolist;
