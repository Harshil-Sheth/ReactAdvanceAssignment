import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useFetch } from '../../custom-hooks/useFetchWithReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import Todoheader from './todoheader';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);





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


export default function DataTable() {
  const classes = useStyles();
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(true);
  const newData = useFetch('https://jsonplaceholder.cypress.io/todos')
  console.log(newData)
    useEffect(() =>{
      const timer = setTimeout(() => {
        setData(newData.data);
        setLoading(newData.loading)
      }, 1000);
      return () => clearTimeout(timer);    
    } ,[newData])

  return (
  <div>        
  
    <TableContainer component={Paper}>
    <Todoheader/>
        {loading?
  <div className={classes.root}><CircularProgress /></div>
  :
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserId</StyledTableCell>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.userId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="left">{row.title}</StyledTableCell>
              <StyledTableCell align="left">{row.completed?<span>true</span>:<span>false</span>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>}
    </TableContainer>
    </div>
  );
}