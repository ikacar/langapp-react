import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';   
import Typography from '@material-ui/core/Typography'    
import Tooltip from '@material-ui/core/Tooltip' 
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';   
import Grid from '@material-ui/core/Grid'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
function NewAudio (props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = event => {
      setValue(event.target.value);
    };
  
    return (
        <div>
            <Grid container  
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item >
                    <Typography variant="h5" gutterBottom>
                        Audio file  
                    </Typography>
                </Grid>
                <Grid item >
                    <TextField
                    disabled
                    id="outlined-disabled"
                    label="Audio File"
                    defaultValue="Audio.pm3"
                    variant="outlined"
                    />
                </Grid>
                <Grid item >
                    <Tooltip title="Add" aria-label="add">
                        <Fab color="primary" className={classes.fab}>
                        <AddIcon />
                        </Fab>
                    </Tooltip>
                </Grid>
            </Grid>
        </div>
    );
};

NewAudio.propTypes = {
    
};

export default NewAudio;