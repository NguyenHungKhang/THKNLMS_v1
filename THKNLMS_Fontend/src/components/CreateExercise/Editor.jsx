import { useOutletContext, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState, useRef, useEffect } from 'react';
import ReactQuill from 'react-quill';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material';
import MuiEditor from './MuiEditor';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


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



const Editor = ({ }) => {
    return (
        <>
            <Card sx={{ minWidth: 275, marginBottom: "20px" }}>
                <CardContent>
                    <TextField sx={{ width: "100%" }} id="outlined-basic" label="Tiêu đề" variant="outlined" />
                    <MuiEditor />
                </CardContent>
            </Card>
        </>
    );
}

export default Editor;