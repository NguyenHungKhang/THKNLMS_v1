import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LinkIcon from '@mui/icons-material/Link';
import { Grid } from '@mui/material';

import "../../assets/img/favicon-32x32.png"
import "../../assets/img/apple-touch-icon.png"


import "../../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../assets/vendor/boxicons/css/boxicons.min.css"
import "../../assets/vendor/quill/quill.snow.css"
import "../../assets/vendor/quill/quill.bubble.css"
import "../../assets/vendor/remixicon/remixicon.css"
import "../../assets/vendor/simple-datatables/style.css"
import "../../assets/css/style.css"
import "../../assets/quill/style.css"


export default function Solution() {
    return (
        <Card sx={{ minWidth: 275, marginBottom: "20px" }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    Lời giải
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab aria-label="upload">
                            <FileUploadIcon />

                        </Fab>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Tải lên
                        </Typography>
                    </Box>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab aria-label="link">
                            <LinkIcon />

                        </Fab>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Liên kết
                        </Typography>
                    </Box>
                </Grid>
            </CardContent>
        </Card >
    );
}
