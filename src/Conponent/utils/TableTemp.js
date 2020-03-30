import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Link from 'react-router-dom/Link'
import withStyles from "@material-ui/core/styles/withStyles";

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

const useStyles = makeStyles(() => ({
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

const TableTemp = props => {
    const cells = Object.keys(props.data[0]);
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

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
        <div>
            <Card elevation={3} {...props.data} >
                <CardContent className={classes.content}>
                    <PerfectScrollbar>
                        <div className={classes.inner}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {cells.map(cell =>(
                                            <StyledTableCell>{cell}</StyledTableCell>
											))}
                                        <StyledTableCell>Profile</StyledTableCell>
									</TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.data.slice(0, rowsPerPage).map(collumn => (
                                        <TableRow className={classes.tableRow}>
                                            {cells.map(cl => (
                                                <TableCell>
                                                    {/* TODO ovaj deo skripi */}
                                                    {collumn[cl]}
                                                </TableCell>
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
        </div>
    )
}

export default TableTemp