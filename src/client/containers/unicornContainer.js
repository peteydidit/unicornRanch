import React from "react";
import { Container, DropdownButton, Dropdown } from "react-bootstrap"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Form } from 'react-bootstrap';

const UnicornContainer = ({unicorns}) => (
            <Paper >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Unicorn</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Color</TableCell>
                            <TableCell align="right">Food</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {unicorns.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select" defaultValue={row.location}>
                                                <option>Pasture</option>
                                                <option>Trail</option>
                                                <option>Stable</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </TableCell>
                                <TableCell align="right">{row.color}</TableCell>
                                <TableCell align="right">{row.food}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );

export default UnicornContainer;