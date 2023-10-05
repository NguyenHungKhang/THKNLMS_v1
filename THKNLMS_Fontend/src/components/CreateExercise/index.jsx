import { useOutletContext, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState, useRef, useEffect } from 'react';
import Editor from './Editor';
import Attachment from './Attachment';
import Option from './Option';
import Solution from './Solution';
import CustomHeader from './CustomHeader';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getUserInfo } from '../../api/getUserInfo';

import "../../assets/img/favicon-32x32.png"
import "../../assets/img/apple-touch-icon.png"


// import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
// import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
// import "../../assets/vendor/boxicons/css/boxicons.min.css"
// import "../../assets/vendor/quill/quill.snow.css"
// import "../../assets/vendor/quill/quill.bubble.css"
// import "../../assets/vendor/remixicon/remixicon.css"
// import "../../assets/vendor/simple-datatables/style.css"
// import "../../assets/css/style.css"



const CreateExercise = ({ }) => {
    const sideBar = useOutletContext();
    const mainResponsive = useMediaQuery({ query: '(min-width: 1199px)' })

    return (
        <>
            <Box>
                <CustomHeader />
                <Box sx={{marginX: "20px", marginTop: "30px"}}>
                    <Grid
                        container
                        direction="row"
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12} md={8}
                            spacing={2}
                        >
                            <Grid item xs>
                                <Editor />
                            </Grid>
                            <Grid item xs>
                                <Attachment />
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            xs={12} md={4}
                            spacing={2}
                        >
                            <Grid item xs>
                                <Option />
                            </Grid>
                            <Grid item xs>
                                <Solution />
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>

            </Box>
        </>
    );
}

export default CreateExercise;