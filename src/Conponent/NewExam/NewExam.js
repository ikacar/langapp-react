import NewExamFields from './NewExamFields'
import NewExamSettings from './NewExamSettings'
import NewExamButtons from './NewExamButtons'
import { Grid } from '@material-ui/core'
import React from 'react';

function NewExam(props){

    return(
        <div>
            <Grid container spacing={5}>
                <Grid item xs = '9'>
                    <NewExamFields/>
                </Grid>
                <Grid item xs='3'>
                    <NewExamSettings/>
                </Grid>
            </Grid>
            <Grid container spacing={5} direction="row" justify="flex-end">
                <Grid item xs='5'>
                    <NewExamButtons/>
                </Grid>
            </Grid>
        </div>
    )
}
export default NewExam;
