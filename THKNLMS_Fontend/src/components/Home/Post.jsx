import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Box,
    Grid,
    Stack,
    TextField
} from '@mui/material';
import {
    AccountCircle,
    ChatBubble

} from '@mui/icons-material';


export default function RecipeReviewCard({ content }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ width: "100%", marginY: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                titleTypographyProps={{ fontWeight: 'bold' }}
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2">
                    <div className='ql-container post-content' dangerouslySetInnerHTML={{ __html: content }} />
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="auto"
                image="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcR4KP0sEPRfzdEXr8GXecgOu6QrPYLO0N_jz2Lyd6Ng-dsY3yWuRdwEyle5QobuLsQHzNEkfd7CCswpRUxLtO0"
                alt="Paella dish"
                sx={{ paddingX: "15px" }}
            />

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" disableRipple>
                    <ChatBubble />
                </IconButton>
                <Typography>
                    0 bình luận
                </Typography>
                <IconButton
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    sx={{ marginLeft: "auto" }}
                    disableRipple
                >
                    <Typography>
                        {expanded ? 'Ẩn bình luận' : 'Hiện bình luận'}
                    </Typography>
                </IconButton>
            </CardActions>

            <CardActions sx={{ mb: 1.75 }}>
                <Box sx={{ display: 'flex', width: '100%', mx: 1, alignItems: "center" }}>
                    <Avatar sx={{ bgcolor: red[500], mr: 2 }} aria-label="recipe">
                        R
                    </Avatar>
                    <TextField
                        id="input-with-sx"
                        placeholder='Nhập bình luận'
                        variant="outlined"
                        sx={{ width: "100%" }}
                        InputProps={{
                            style: {
                                borderRadius: "50px",
                                height: "40px"
                            }
                        }} />
                </Box>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Box sx={{ display: 'flex', width: '100%', alignItems: "start" }}>
                        <Avatar sx={{ bgcolor: red[500], mr: 2 }} aria-label="recipe">
                            R
                        </Avatar>
                        <Box
                            sx={{
                                border: "1px solid transparent",
                                borderRadius: "20px",
                                padding: "8px",
                                backgroundColor: "#F1F1F1"
                            }}>
                            <Stack direction="row">
                                <Typography align='justify' fontWeight='bold' fontSize='15px'>
                                    Shrimp and Chorizo Paella 
                                </Typography>
                                <Typography fontSize='14px' fontWeight='light' color='gray'><span>&nbsp;</span>- September 14, 2016</Typography>
                            </Stack>

                            <Typography align='justify' fontSize='15px'>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes. asbxkasbckasjkbckaskjbckabsjkcbjkasjkcaksjbcjkasjkca kbhjk hjbj bjb jkbjk bjb jhb klb bk bkb kjbjk bj bjb jkb  hjb bjk bjk
                            </Typography>
                        </Box>

                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}
