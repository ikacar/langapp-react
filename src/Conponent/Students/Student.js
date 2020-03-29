import React,{useState} from 'react';
import Particular from '../utils/Particular'
import TableTemp from '../utils/TableTemp'

import mockData from './data'
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    divider:{
        height:'50px'
    }
});

//ucitati podatke o odredjenom studenti sa rest-a
function Student  (props)  {
const [users] = useState(mockData);
const cells = ['name','mail','index','exams','profiles'];
const classes=useStyles();
    return(
    <div>
    <Grid container>
        <Grid item md='12'>
            <Particular/>
        </Grid>
        <Grid item md='12' className={classes.divider} />
        <Grid item md='12'>
            <TableTemp data={users} cells={cells}/>
        </Grid>
        </Grid>
    </div>
  );
    }
export default Student