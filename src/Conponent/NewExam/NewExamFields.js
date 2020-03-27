import React from 'react';
import PropTypes from 'prop-types';

import NewForeignText from './Inputs/NewForeignText'
import NewNativeText from './Inputs/NewNativeText'
import NewAudio from './Inputs/NewAudio'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Paper
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Paper>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

function  NewExamFields (props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
        return (
               <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Foreign" {...a11yProps(0)} />
          <Tab label="Native" {...a11yProps(1)} />
          <Tab label="Audio" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <NewForeignText/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <NewNativeText/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewAudio/>
      </TabPanel>
    </div>
        );
    
}

export default NewExamFields;