import React from 'react';
import { Grid, Paper, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    studentMark:{
        // align:''
    },
    divider:{
        height:'40px'
    }
}));

function Particular (props){

    const classes=useStyles();

    return (
        <Grid container>
            <Grid item md='12'>
            <Paper elevation={3}>
                <Grid item md='12'>            
                    <Grid container
                            direction="row"
                            justify="space-between"
                            spacing='2'
                            >
                        <Grid item md='6'>
                            <TextField
                                size="small"
                                className={classes.studentName}
                                id="outlined-read-only-input"
                                label="Student"
                                defaultValue="Ilija Mikic"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                />
                        </Grid>
                        <Grid item md='6'>
                            <Grid container justify="flex-end">
                                <TextField
                                        size="small"
                                        className={classes.studentMark}
                                        id="outlined-read-only-input"
                                        label="Prosecna Ocena"
                                        defaultValue="9.20"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        alignItems=''
                                        variant="outlined"
                                        />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md='12' className={classes.divider}/>
                <Grid item md='12'>
                    <Grid container
                            direction="row"
                            justify="space-between"
                            spacing='2'
                            >
                        <Grid item md='6'>
                            <TextField
                                size="small"
                                className={classes.studentName}
                                id="outlined-read-only-input"
                                label="Index"
                                defaultValue="570/2013"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="outlined"
                                />
                        </Grid>
                        <Grid item md='6'>
                            <Grid container justify="flex-end">
                                <TextField
                                        size="small"
                                        className={classes.studentMark}
                                        id="outlined-read-only-input"
                                        label="Finished/Exams"
                                        defaultValue="5/7"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        alignItems=''
                                        variant="outlined"
                                        />
                            </Grid>
                        </Grid>
                    </Grid>
                 </Grid>
            </Paper>
            </Grid>
        </Grid>
    )
  
}

export default Particular