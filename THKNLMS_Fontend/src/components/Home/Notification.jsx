import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { TextSnippet, Comment, Close } from '@mui/icons-material';
import { Card, CardContent, Typography, IconButton } from '@mui/material';

export default function Notification() {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography variant='h6' fontWeight='bold'>
                        Thông báo
                    </Typography>
                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper'
                        }}>
                        <ListItem
                            sx={{
                                border: '1px solid #E1E1E1',
                                borderRadius: '10px',
                                alignItems: 'start',
                                marginBottom: '15px',
                                transition: '0.2s',
                                // selected and (selected + hover) states
                                '&:hover': {
                                    boxShadow: '5px 5px #0033cc'
                                }
                            }}
                        >
                            <ListItemText
                                primary="Photos"
                                primaryTypographyProps={{ fontWeight: 'bold' }}
                                secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                                secondaryTypographyProps={{ textAlign: 'justify' }}
                            />
                            <IconButton edge="end" aria-label="comments">
                                <Close />
                            </IconButton>
                        </ListItem>

                        <ListItem
                            sx={{
                                border: '1px solid #E1E1E1',
                                borderRadius: '10px',
                                alignItems: 'start',
                                marginBottom: '15px',
                                transition: '0.2s',
                                // selected and (selected + hover) states
                                '&:hover': {
                                    boxShadow: '5px 5px #0033cc'
                                }
                            }}
                        >
                            <ListItemText
                                primary="Photos"
                                primaryTypographyProps={{ fontWeight: 'bold' }}
                                secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                                secondaryTypographyProps={{ textAlign: 'justify' }}
                            />
                            <IconButton edge="end" aria-label="comments">
                                <Close />
                            </IconButton>
                        </ListItem>

                    </List>
                </CardContent>
            </Card >

        </>

    );
}
