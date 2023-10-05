import { useOutletContext, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState, useRef, useEffect } from 'react';
import { getUserInfo } from '../../api/getUserInfo';
import { Box, Container, Grid } from '@mui/material';
import Schedule from './Schedule';

// import "../../assets/img/favicon-32x32.png"
// import "../../assets/img/apple-touch-icon.png"


// import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
// import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
// import "../../assets/vendor/boxicons/css/boxicons.min.css"
// import "../../assets/vendor/quill/quill.snow.css"
// import "../../assets/vendor/quill/quill.bubble.css"
// import "../../assets/vendor/remixicon/remixicon.css"
// import "../../assets/vendor/simple-datatables/style.css"
// import "../../assets/css/style.css"


const TimeSchedule = ({ }) => {
    const sideBar = useOutletContext();
    const mainResponsive = useMediaQuery({ query: '(min-width: 1199px)' })

    return (
        <>
            <Box
                sx={{
                    transition: 'all 0.3s',
                    mt: '60px',
                    paddingX: '30px',
                    paddingY: '20px',
                    marginLeft: mainResponsive ? (sideBar == "0px" ? "300px" : "150px") : "0px",
                    marginRight: mainResponsive ? (sideBar == "0px" ? "0px" : "150px") : "0px"
                }} >
                <Container maxWidth='xl'>
                    <Grid container>
                        <Grid item xl>
                            <Schedule />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    );
}

export default TimeSchedule;