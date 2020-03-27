import NewExamFields from './NewExamFields'
import NewExamSettings from './NewExamSettings'
import NewExamButtons from './NewExamButtons'
import { Grid } from '@material-ui/core'
import React from 'react';

function NewExam(props){

    return(

        <div>
            <Grid container direction='column' alignItems='stretch' spacing='3'>
                <Grid item >
                    <Grid container spacing='2'>
                        <Grid item xs='9'>
                            <NewExamFields/>
                        </Grid>
                        <Grid item xs='3'>
                            <NewExamSettings/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end">
                    <NewExamButtons/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default NewExam;
