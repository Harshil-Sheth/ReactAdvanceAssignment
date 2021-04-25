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
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
            Todo
          </Typography>
          <Button onClick={()=>history.push("/datatable")} color="inherit">Go to Datatable</Button>
        </Toolbar>
      </AppBar>
    </div>
		
    )
}

export default Todoheader
