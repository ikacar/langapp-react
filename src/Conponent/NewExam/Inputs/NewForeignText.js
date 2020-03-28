import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'; 
import Typography from '@material-ui/core/Typography'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
function NewForeignText (props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = event => {
      setValue(event.target.value);
    };
  
    return (
        <div>   
                  <Typography variant="h5" gutterBottom>
                    Foreign text
                </Typography>
                <TextField
                    fullWidth 
                    id="filled-multiline-flexible"
                    label="Text"
                    multiline
                    rowsMax="25"
                    onChange={handleChange}
                    variant="outlined"
                    />  

        </div>
    );
};

NewForeignText.propTypes = {
    
};

export default NewForeignText;