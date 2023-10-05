import { useOutletContext, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { getUserInfo } from '../../api/getUserInfo';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid } from '@mui/material';


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



const Exercise = ({ }) => {
    const sideBar = useOutletContext();
    const mainResponsive = useMediaQuery({ query: '(min-width: 1199px)' })
    const [showClearIcon, setShowClearIcon] = useState("none");
    const [expanded, setExpanded] = useState(false);

    const handleChangeAccirdion =
        (panel) => (e) => {
            setExpanded(!expanded ? panel : false);
        };

    const handleChange = (e) => {
        setShowClearIcon(e.target.value === "" ? "none" : "flex");
    };

    const handleClick = () => {
        // TODO: Clear the search input
        console.log("clicked the clear icon...");
    };

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
                <Box>
                    <Typography variant="h5" fontWeight="bold" color="text.primary">
                        Bài tập
                    </Typography>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                        sx={{ marginTop: "5px" }}
                    >
                        <NavLink to="/course">
                            <Link underline="hover" key="1" color="black">
                                Trang chủ
                            </Link>
                        </NavLink>
                        <Typography key="3" color="text.primary">
                            Bài tập
                        </Typography>,
                    </Breadcrumbs>
                </Box>
                <Divider variant="middle" sx={{ my: 2, borderColor: "gray" }} />

                {/* End Page Title */}

                <Grid container spacing={2}>
                    <Grid item md={8} sm={12}>
                        <Card sx={{ marginBottom: "10px" }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" marginBottom="10px">
                                    Tùy chỉnh
                                </Typography>
                                <Stack
                                    direction={{ md: 'column', lg: 'row' }}
                                    spacing={{ md: 1, lg: 2 }}>


                                    <Button width={{ md: "100%", lg: 3 }} variant="contained" component={NavLink} to="/course/exercise/create">
                                        <AddIcon sx={{ marginRight: 1 }} /> Thêm
                                    </Button>


                                    <FormControl sx={{ marginY: "10px", width: "100%" }} >
                                        <TextField
                                            placeholder='Tìm kiếm bài tập'
                                            size="small"
                                            variant="outlined"
                                            onChange={handleChange}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <SearchIcon />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment
                                                        position="end"
                                                        style={{ display: showClearIcon }}
                                                        onClick={handleClick}
                                                    >
                                                        <ClearIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </FormControl>

                                </Stack>

                                <Box marginTop="20px">
                                    <Typography variant="h6" component="div">
                                        Chủ đề 2
                                    </Typography>
                                    <Divider variant="middle" sx={{ my: 1, borderColor: "gray" }} />


                                    <List >
                                        <ListItem width="100%">
                                            <Accordion sx={{ width: "100%" }} expanded={expanded === 'panel1'} onChange={handleChangeAccirdion('panel1')}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <TextSnippetIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary="Single-line item"
                                                        secondary="Secondary Text"
                                                    />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                                        Aliquam eget maximus est, id dignissim quam.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </ListItem>

                                        <ListItem width="100%">
                                            <Accordion sx={{ width: "100%" }} expanded={expanded === 'panel2'} onChange={handleChangeAccirdion('panel2')}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <TextSnippetIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary="Single-line item"
                                                        secondary="Secondary Text"
                                                    />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                                        Aliquam eget maximus est, id dignissim quam.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </ListItem>

                                        <ListItemButton >
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }>

                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <TextSnippetIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Single-line item"
                                                    secondary="Secondary Text"
                                                />

                                            </ListItem>
                                        </ListItemButton >
                                        <ListItemButton >
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }>

                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <TextSnippetIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Single-line item"
                                                    secondary="Secondary Text"
                                                />

                                            </ListItem>
                                        </ListItemButton >
                                        <ListItemButton >
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }>

                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <TextSnippetIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Single-line item"
                                                    secondary="Secondary Text"
                                                />

                                            </ListItem>
                                        </ListItemButton >
                                        <ListItemButton >
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }>

                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <TextSnippetIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Single-line item"
                                                    secondary="Secondary Text"
                                                />

                                            </ListItem>
                                        </ListItemButton >



                                    </List>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={12} sx={{ position: 'relative' }}>
                        <Card sx={{ position: "sticky", top: "100px" }}>
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" marginBottom="10px">
                                    Chi tiết
                                </Typography>

                                <List>

                                    <ListItem sx={{ paddingY: "0" }}>
                                        <ListItemText primary="Ngày tạo" />
                                        <ListItemText sx={{ textAlign: "right" }} secondary="18/02/2023" />
                                    </ListItem>


                                    <ListItem sx={{ paddingY: "0" }}>
                                        <ListItemText primary="Bắt đầu" />
                                        <ListItemText sx={{ textAlign: "right" }} secondary="18/02/2023" />
                                    </ListItem>

                                    <ListItem sx={{ paddingY: "0" }}>
                                        <ListItemText primary="Đến hạn" />
                                        <ListItemText sx={{ textAlign: "right" }} secondary="18/02/2023" />
                                    </ListItem>

                                    <ListItem sx={{ paddingY: "0" }}>
                                        <ListItemText primary="Ngày đăng " />
                                        <ListItemText sx={{ textAlign: "right" }} secondary="18/02/2023" />
                                    </ListItem>

                                    <ListItem sx={{ paddingY: "0" }}>
                                        <ListItemText primary="Đã làm" />
                                        <ListItemText sx={{ textAlign: "right" }} secondary="0/0" />
                                    </ListItem>

                                </List>


                                <Divider variant="middle" sx={{ my: 1, borderColor: "gray" }} />

                                <List>
                                    <ListItemButton sx={{ padding: "0" }}>
                                        <ListItem sx={{ paddingY: "0" }}>
                                            <ListItemText primary="Di chuyển lên" />

                                            <ListItemIcon edge="end" sx={{ justifyContent: "right" }} >
                                                <ArrowCircleUpIcon />
                                            </ListItemIcon>
                                        </ListItem>
                                    </ListItemButton>
                                    <ListItemButton sx={{ padding: "0" }}>
                                        <ListItem sx={{ paddingY: "0" }}>
                                            <ListItemText primary="Di chuyển xuống" />

                                            <ListItemIcon edge="end" sx={{ justifyContent: "right" }} >
                                                <ArrowCircleDownIcon />
                                            </ListItemIcon>
                                        </ListItem>
                                    </ListItemButton>
                                    <ListItemButton sx={{ padding: "0" }}>
                                        <ListItem sx={{ paddingY: "0" }}>
                                            <ListItemText primary="Chỉnh sửa" />

                                            <ListItemIcon edge="end" sx={{ justifyContent: "right" }} >
                                                <DriveFileRenameOutlineIcon />
                                            </ListItemIcon>
                                        </ListItem>
                                    </ListItemButton>
                                    <ListItemButton sx={{ padding: "0" }}>
                                        <ListItem sx={{ paddingY: "0" }}>
                                            <ListItemText primary="Xóa" />

                                            <ListItemIcon edge="end" sx={{ justifyContent: "right" }} >
                                                <DeleteForeverIcon />
                                            </ListItemIcon>
                                        </ListItem>
                                    </ListItemButton>
                                    <ListItemButton sx={{ padding: "0" }}>
                                        <ListItem sx={{ paddingY: "0" }}>
                                            <ListItemText primary="Thống kê" />

                                            <ListItemIcon edge="end" sx={{ justifyContent: "right" }} >
                                                <StackedBarChartIcon />
                                            </ListItemIcon>
                                        </ListItem>
                                    </ListItemButton>
                                </List>

                                <Divider variant="middle" sx={{ my: 1, borderColor: "gray" }} />

                                <Button sx={{ width: "100%", mt: 2 }} variant="contained" href="#">
                                    <AssignmentIcon sx={{ marginRight: 1 }} /> Nộp bài tập
                                </Button>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Box>

        </>
    );
}

export default Exercise;