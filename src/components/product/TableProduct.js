import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function createData(name, info) {
    return { name, info };
}



const defaultProps = {
    m: 1,
    style: { width: '5rem',},
    borderColor: 'secondary.main',
};

const TableProduct = ({result})=>{

    console.log("result");
    const cells = result.specification;

    const rows = [

        cells && cells.map((cell)=>(
            createData(cell.title , cell.info)
        ))

    ];

    return(
        <div>

            <Box align="right" m={1} >
            <Typography > مشخصات کالا</Typography>
            <Box borderBottom={2} {...defaultProps} />
            </Box>

            <Box display="flex" mt={2} >
            <Typography display="inline" style={{marginTop:15 , marginLeft:150 , marginRight:8 }} >مشخصات</Typography>

            <TableContainer>
                <Table>
                    <TableBody>
                        {rows.map((row)=>(
                            <TableRow key={row.name}>
                                <TableCell component="th" align="right" style={{ width: 300 }}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" >{row.info}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </div>
    );
}

export default TableProduct;