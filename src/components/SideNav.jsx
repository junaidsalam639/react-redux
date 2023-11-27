import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Input } from 'antd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const drawerWidth = 240;

const iconArray = [
    <DashboardIcon />,
    <AnalyticsIcon />,
    <LocalFireDepartmentRoundedIcon />,
    <InboxIcon />,
    <MailIcon />,
    <HelpRoundedIcon />,
];

function SideNav(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handlePageClick = (page) => {
        navigate(`/${page}`, { replace: true });
    };



    const drawer = (
        <div style={{ height: '100vh', backgroundColor: '#182C61' }}>
            <Toolbar />
            <ListItemButton onClick={() => navigate('/')} style={{ textAlign: 'start', marginTop: '-65px', cursor: 'pointer' }}>
                <h3 className='fw-bold text-light pt-2'><AcUnitIcon className='text-light fs-2 mx-1' />Invest Bank</h3>
            </ListItemButton>
            <Divider style={{ borderBottom: '2px solid white' }} />
            <List className='mt-5'>
                {['Dashboard', 'Analytics', 'Payments', 'Deposits', 'Moneybox', 'Securities'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handlePageClick(text)}>
                            <ListItemIcon className='text-white'>
                                {iconArray[index]}
                            </ListItemIcon>
                            <ListItemText className='text-white' primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider style={{ borderBottom: '2px solid white' }} />
            <List>
                {['Help', 'Setting'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handlePageClick(text)}>
                            <ListItemIcon className='text-white'>
                                {iconArray[index + 3]}
                            </ListItemIcon>
                            <ListItemText className='text-white' primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ backgroundColor: '#182C61', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className='text-dark' variant="h6" noWrap component="div">
                        <Input placeholder="Search..." size='large' />
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <React.Fragment>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} >
                                <NotificationsIcon style={{ cursor: 'pointer' }} className='text-light fs-2 cursor-pointer' />
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        backgroundColor: '#182C61',
                                        color: 'white',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider style={{ borderBottom: '2px solid white' }} />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd style={{ color: 'white', backgroundColor: 'gray', borderRadius: '50%', width: 30, height: 30 }} fontSize="large" className='p-1' />

                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings style={{ color: 'white', backgroundColor: 'gray', borderRadius: '50%', width: 30, height: 30 }} fontSize="large" className='p-1' />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout style={{ color: 'white', backgroundColor: 'gray', borderRadius: '50%', width: 30, height: 30 }} fontSize="large" className='p-1' />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* <Typography paragraph>
                    <h1>Home Page</h1>
                </Typography> */}
            </Box>
        </Box>
    );
}

export default SideNav;
