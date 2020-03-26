import React, { Component } from 'react';
import './SideBar.scss';
import './SearchBar.scss';
import {Link} from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import ExamIcon from '@material-ui/icons/FormatListNumbered'
import StudentIcon from '@material-ui/icons/Person'
import ResultsIcon from '@material-ui/icons/PlaylistAddCheck'
import CreateNewIcon from '@material-ui/icons/AddCircleOutline'
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 180;

	const useStyles = makeStyles(theme => ({
	  root: {
		display: 'flex',
	  },
	  appBar: {
		zIndex: theme.zIndex.drawer + 1,
	  },
	  drawer: {
		width: drawerWidth,
		flexShrink: 0,
	  },
	  drawerPaper: {
		width: drawerWidth,
	  },
	  content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	  },
	  // necessary for content to be below app bar
	  toolbar: theme.mixins.toolbar,
	}));


function SideBar(props) {
	
	const classes = useStyles();

    return(
		<div>	
		<Drawer
		className={classes.drawer}
		variant="permanent"
		classes={{
		  paper: classes.drawerPaper,
		}}
	  >
		<div className={classes.toolbar} />
		<MenuList>
			<MenuItem component={Link} to='/exams'>
				<ListItemIcon><ExamIcon/></ListItemIcon>
				<ListItemText primary={'Exams'} />
			</MenuItem>
			<MenuItem component={Link} to='/students'>
				<ListItemIcon><StudentIcon/></ListItemIcon>
				<ListItemText primary={'Students'} />
			</MenuItem>
			<MenuItem component={Link} to='/results'>
				<ListItemIcon><ResultsIcon/></ListItemIcon>
				<ListItemText primary={'Results'} />
			</MenuItem>
			<MenuItem component={Link} to='/createNew'>
				<ListItemIcon><CreateNewIcon/></ListItemIcon>
				<ListItemText primary={'Create New'} />
			</MenuItem>
		</MenuList>
		  </Drawer>
		  <main className={classes.content}>
		  <div className={classes.toolbar} />
			{props.children}
		</main>
		</div>
    );
}

export default SideBar	