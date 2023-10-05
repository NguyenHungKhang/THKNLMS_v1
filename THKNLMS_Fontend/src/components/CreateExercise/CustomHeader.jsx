import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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


export default function CustomHeader() {
    return (
        <Card sx={{ minWidth: "100%" }}>
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs>
                        <Typography variant="h5" fontWeight="bold" color="text.primary">
                            Tạo bài tập mới
                        </Typography>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            sx={{ marginTop: "5px" }}
                        >
                            <Link underline="hover" key="1" color="inherit" href="/">
                                Trang chủ
                            </Link>,
                            <Link
                                underline="hover"
                                key="2"
                                color="inherit"
                                href="/course/exercise"
                            >
                                Bài tập
                            </Link>,
                            <Typography key="3" color="text.primary">
                                Tạo bài tập mới
                            </Typography>,
                        </Breadcrumbs>
                    </Grid>

                    <Grid item display="flex" justifyContent="right" xs>
                        <Button variant="contained" href="#">
                            Đăng bài
                        </Button>
                    </Grid>
                </Grid>



            </CardContent>
        </Card >
    );
}
