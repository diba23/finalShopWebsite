import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link'

function Footer (){
    return(
        <footer >
            <Box bgcolor="text.secondary" color="white" px={{xs:3 ,sm:10}} py={{xs:5,sm:9}} mt={4}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>help</Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>help</Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>help</Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" >hi</Link>
                            </Box>
                        </Grid>
                    </Grid>
                     <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        designed by diba &reg;{new Date().getFullYear()}
                     </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer ; 