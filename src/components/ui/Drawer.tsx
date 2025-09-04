import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const iconByText: Record<string, React.ReactNode> = {
    About: <PersonIcon />,
    Contact: <MailIcon />,
    Home: <HomeFilledIcon />,
    };

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
            {['Home'].map((text) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {iconByText[text]}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['About', 'Contact'].map((text) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {iconByText[text]}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    return (
        <div>
        <Button color="primary" onClick={toggleDrawer(true)}>
            <DensityMediumIcon />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
        </div>
    );
}