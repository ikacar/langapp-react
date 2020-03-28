import { Paper, Grid } from "@material-ui/core";
import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

function NewExamSettings (props){
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const [state, setState] = React.useState({
    checked: true
  });

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleRequiredChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
    return(
        <div>
            <AppBar position="static" color="default">
                <Tabs  aria-label="simple tabs example">
                    <Tab label="Settings"/>
                </Tabs>
            </AppBar>
            <Paper>
            <Grid container direction='column' spacing='3' alignItems='center'>
                <Grid item>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}   >
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Start date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Due date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item>
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        defaultValue='0'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
               </Grid>
                <Grid item>
                <FormControlLabel
                   control={ <Switch
                            checked={state.checked}
                            onChange={handleRequiredChange}
                            color="primary"
                            name="checked"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />}
                        label="Required"
                        />
                </Grid>
            </Grid>
            </Paper>
        
        </div>
    )
}
export default NewExamSettings;
