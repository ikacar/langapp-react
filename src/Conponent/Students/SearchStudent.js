
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import clsx from 'clsx';
import mockData from './data';
import Link from 'react-router-dom/Link'

import {
	Card,
	CardActions,
	CardContent,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TablePagination
  } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));
const SearchStudent = props =>{

	const { className, ...rest } = props;
	const [users] = useState(mockData);
	const classes = useStyles();
  
	const [selectedUsers, setSelectedUsers] = useState([]);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);
  
	const handlePageChange = (event, page) => {
	  setPage(page);
	};
  
	const handleRowsPerPageChange = event => {
	  setRowsPerPage(event.target.value);
	};

        return(
		<Card
			{...rest}
			className={clsx(classes.root, className)}
		  >
			<CardContent className={classes.content}>
			  <PerfectScrollbar>
				<div className={classes.inner}>
				  <Table>
					<TableHead>
					  <TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Index</TableCell>
						<TableCell>Exams</TableCell>
						<TableCell>Profile</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  {users.slice(0, rowsPerPage).map(user => (
						<TableRow
						  className={classes.tableRow}
						  hover
						  key={user.id}
						  selected={selectedUsers.indexOf(user.id) !== -1}
						>
						  <TableCell>
							  	{user.name}
						  </TableCell>
						  <TableCell>{user.email}</TableCell>
						  <TableCell>
							{user.index}
						  </TableCell>
						  <TableCell>{user.exams}</TableCell>
						  <TableCell>
							<Link to='/student'>Profile ></Link>
						  </TableCell>
						</TableRow>
					  ))}
					</TableBody>
				  </Table>
				</div>
			  </PerfectScrollbar>
			</CardContent>
			<CardActions className={classes.actions}>
			  <TablePagination
				component="div"
				count={users.length}
				onChangePage={handlePageChange}
				onChangeRowsPerPage={handleRowsPerPageChange}
				page={page}
				rowsPerPage={rowsPerPage}
				rowsPerPageOptions={[5, 10, 25]}
			  />
			</CardActions>
		  </Card>
        )
    }


export default SearchStudent