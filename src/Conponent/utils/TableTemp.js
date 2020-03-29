
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import clsx from 'clsx';
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
const TableTemp = props =>{

	const { className, ...rest } = props;
	const classes = useStyles();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [page, setPage] = useState(0);
  
	const handlePageChange = (event, page) => {
	  setPage(page);
	};
  
	const handleRowsPerPageChange = event => {
	  setRowsPerPage(event.target.value);
	};

        return(
		<Card elevation={3}
			{...rest}
			className={clsx(classes.root, className)}
		  >
			<CardContent className={classes.content}>
			  <PerfectScrollbar>
				<div className={classes.inner}>
				  <Table>
					<TableHead>
					  <TableRow>
                        {props.cells.map(cell =>(
                            <TableCell>{cell}</TableCell>
                        ))
                        }
					  </TableRow>
					</TableHead>
					<TableBody>
					  {props.data.slice(0, rowsPerPage).map(collumn => (
						<TableRow
						  className={classes.tableRow}
						>
                            {props.cells.map(cl => (
                                <TableCell>
                                    {/* TODO ovaj deo skripi */}
                                    {collumn[cl]}                                 </TableCell>
                            ))} 
						  <TableCell>
							<Link to='/exams'>Profile ></Link>
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
				count={props.data.length}
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
export default TableTemp