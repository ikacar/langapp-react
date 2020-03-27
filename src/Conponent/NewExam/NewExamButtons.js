import { Grid } from '@material-ui/core'
import React from 'react';
import Button from '@material-ui/core/Button';

function NewExamButtons(props){

    return(

        <div>
            <Grid container spacing='2'>
                <Grid item >
                <Button color="primary">
                        Draft
                    </Button>
                </Grid>
                <Grid item>

                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </Grid>

            </Grid>
        </div>
    )
}
export default NewExamButtons;
