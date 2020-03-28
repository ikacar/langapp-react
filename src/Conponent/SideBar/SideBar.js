import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import ExamIcon from '@material-ui/icons/FormatListNumbered'
import StudentIcon from '@material-ui/icons/Person'
import ResultsIcon from '@material-ui/icons/PlaylistAddCheck'
import CreateNewIcon from '@material-ui/icons/AddCircleOutline'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const drawerWidth = 220;

	const useStyles = makeStyles(theme => ({
	  root: {
		display: 'flex',
	  },
	  appBar: {
		zIndex: theme.zIndex.drawer + 1,
	  },
	  drawer: {
		//   TODO videti kako sirina da se resi 
		//  width: 'auto',
		// flexShrink: 0,
		width: drawerWidth,
	  },
	  drawerPaper: {
		//  width: 'auto',
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
	<div className={classes.wraper}>
		<Grid container>	
			<Grid item xs='2'>
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
					<MenuItem component={Link} to='/createExam'>
						<ListItemIcon><CreateNewIcon/></ListItemIcon>
						<ListItemText primary={'Create New'} />
					</MenuItem>
				</MenuList>
				</Drawer>
			</Grid>
			<Grid item xs='10'>
				<main className={classes.content}>
					<div className={classes.toolbar} />
						{props.children}
				</main>
			</Grid>
		</Grid>
	</div>
    );
}

export default SideBar	