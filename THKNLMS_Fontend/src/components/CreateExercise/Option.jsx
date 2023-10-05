import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { viVN } from '@mui/x-date-pickers/locales';
import dayjs from 'dayjs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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
import "../../assets/datetimepicker/style.css"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Tất cả',
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const Option = ({ }) => {
    const [value, setValue] = useState(dayjs(new Date().toLocaleString()))
    const [personName, setPersonName] = React.useState(names);

    const handleChange = (e) => {
        const {
            target: { value },
        } = e;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <>
            <Card sx={{ marginBottom: "20px" }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        Tùy chỉnh
                    </Typography>

                    <Divider variant="middle" sx={{ my: 3, borderColor: "gray" }} />

                    <Box>
                        <LocalizationProvider
                            adapterLocale={viVN}
                            localeText={viVN.components.MuiLocalizationProvider.defaultProps.localeText}
                            dateAdapter={AdapterDayjs}>

                            <Grid
                                container
                                spacing={1}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs>
                                    <DateTimePicker
                                        label="Thời gian bắt đầu"
                                        format="DD/MM/YYYY HH:MM"
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                    />
                                </Grid>

                                <Grid item>
                                    <EastIcon justifyContent="center" />
                                </Grid>

                                <Grid item xs>
                                    <DateTimePicker
                                        label="Thời gian kế thúc"
                                        format="DD/MM/YYYY HH:MM"
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                    />
                                </Grid>


                            </Grid>
                        </LocalizationProvider>
                    </Box>

                    <Divider variant="middle" sx={{ my: 3, borderColor: "gray" }} />

                    <Box>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={6}>
                                <FormControl sx={{ maxWidth: "100%" }}>
                                    <Typography color="text.normal">
                                        Học viên thực hiện
                                    </Typography>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={personName.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6}>
                                <FormControl sx={{ maxWidth: "100%" }}>
                                    <Typography color="text.normal">
                                        Chủ đề
                                    </Typography>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                        fullWidth
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={personName.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                            </Grid>



                        </Grid>
                    </Box>

                    <Divider variant="middle" sx={{ my: 3, borderColor: "gray" }} />

                    <Box>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ width: "100%" }}>
                            <Grid item>
                                <Typography sx={{ wordBreak: "break-word" }} color="text.normal">
                                    Mật khẩu bài tập
                                </Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="right">
                                <Switch />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ width: "100%" }}>
                            <Grid item>
                                <Typography sx={{ wordBreak: "break-word" }} color="text.normal">
                                    Cho phép học sinh xem điểm sau khi hoàn thành bài tập
                                </Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="right">
                                <Switch />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ width: "100%" }}>
                            <Grid item>
                                <Typography sx={{ wordBreak: "break-word" }} color="text.normal">
                                    Cho phép học sinh xem lời giải sau khi hoàn thành bài tập
                                </Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="right">
                                <Switch />
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ width: "100%" }}>
                            <Grid item>
                                <Typography sx={{ wordBreak: "break-word" }} color="text.normal">
                                    Hẹn giờ đăng
                                </Typography>
                            </Grid>
                            <Grid item display="flex" justifyContent="right">
                                <Switch />
                            </Grid>
                        </Grid>
                    </Box>


                </CardContent>
            </Card>
        </>

    );
}

export default Option;