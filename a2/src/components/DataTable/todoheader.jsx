import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import './todoheader.css'
const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	title: {
	  flexGrow: 1,
	},
  }));
const Todoheader = () => {
	let history = useHistory();
	const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#000'}} >
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Datatable
          </Typography>
          <Button variant="contained" onClick={()=>history.push("/todo")} >Go to Todo</Button>
        </Toolbar>
      </AppBar>
    </div>
		
    )
}

export default Todoheader
