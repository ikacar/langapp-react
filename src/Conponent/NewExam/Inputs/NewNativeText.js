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
  
function NewNativeText (props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
  
    const handleChange = event => {
      setValue(event.target.value);
    };
  
    return (
        <div>
          <Typography variant="h5" gutterBottom>
            Native text
          </Typography>
            <TextField
                fullWidth
                id="filled-multiline-flexible"
                label="Text"
                multiline={true}
                rows="15"
                placeholder="Input Native Text Here"
                onChange={handleChange}
                variant="outlined"
                />  
        </div>
    );
};

NewNativeText.propTypes = {
    
};

export default NewNativeText;