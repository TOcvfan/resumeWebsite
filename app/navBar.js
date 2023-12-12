'use client';
import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Tooltip, MenuItem } from '@/lib/mui';
import Link from 'next/link';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppContext } from './AppContext';
import { authentication } from '@/api/login';
import Login from './Login';
import LoginKnap from '$/Components/logindKnap';

const NavBar = ({ navn, aktiv }) => {
    const user = authentication.currentUserValue;
    const { isLoggedIn, language } = useAppContext();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(!openModal);

    const sporglan = language === "Dk"
    const sidesp = (dk, en) => sporglan ? dk : en;
    const link = { name: 'Links', link: '/links', targetSegment: 'links' };
    const piger = user?.role === "FISSE" ?
        { name: 'Rosie and Bella', link: '/loves_rosie_and_bella', targetSegment: 'loves_rosie_and_bella' }
        :
        { name: sidesp('pølse', 'cheese'), link: '/skrivebord', targetSegment: 'skrivebord' }

    let pagesLoggedIn = [
        { name: sidesp('Forside', 'Start page'), link: '/forside', targetSegment: 'forside' },
        { name: sidesp('Min Bil', 'My Car'), link: '/bil', targetSegment: 'bil' },
        { name: sidesp('2cv Campingvogn', '2cv caravan'), link: '/2cvcampingvogn', targetSegment: '2cvcampingvogn' },
        { name: sidesp('Profil', 'Profile'), link: '/profil', targetSegment: 'profil' },
        piger,
        { name: sidesp('Send en besked', 'Send a message'), link: '/besked', targetSegment: 'besked' },
        link
    ]

    let pagesNotLoggedIn = [
        { name: sidesp('Hjem', 'home'), link: '/', targetSegment: null },
        { name: sidesp('Opret dig', 'Register'), link: '/bruger/login', targetSegment: 'bruger' },
        { name: sidesp('Log ind', 'Log in'), link: '/login', targetSegment: 'login' },
        link
    ]

    /* const logout = () => {
        authenticationService.logout();
    } */

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    //background-color: ${(activeSegment === )}

    const MenuItems = ({ farve }) => {
        const StyledLink = styled(Link)`
            text-decoration: none;
            color: ${farve};
                &:focus, &:hover, &:visited, &:link, &:active {
                    text-decoration: none;
                    color: ${farve};
            }
        `;

        const sider = () => {
            if (isLoggedIn) {
                return pagesLoggedIn
            } else {
                return pagesNotLoggedIn
            }
        }
        const bgfarve = farve === 'purple' ? 'yellow' : 'purple'
        const markering = {
            borderRadius: '20%',
            backgroundColor: bgfarve,
            fontWeight: 'bold'
        }

        return (
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>
                {sider().map((p) => {
                    //console.log(p)
                    const aktivSide = (aktiv === p.targetSegment) ? markering : { backgroundColor: 'inherit' }
                    return (
                        <MenuItem onClick={handleCloseNavMenu} key={p.name} sx={
                            aktivSide
                        }>
                            <StyledLink className='link' href={p.link}>
                                <Typography variant="div" textAlign="center">
                                    {p.name}
                                </Typography>
                            </StyledLink>
                        </MenuItem>
                    )
                })}
            </Box>
        )
    }

    return (
        <AppBar position="fixed" sx={{
            color: '#fff',
            background: 'linear-gradient(89deg, #FF5EDF 0%, #04C6DE 100%)'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        {navn}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="purple"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItems farve='purple' />
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'purple',
                            textDecoration: 'none',
                        }}
                    >
                        {navn}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <MenuItems farve='white' />
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={isLoggedIn ? "Log ud" : "Log ind"}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="S">
                                    S
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {isLoggedIn ? (
                                <Typography textAlign="center">
                                    <MenuItem ><Link href='/'>
                                        log ud
                                    </Link></MenuItem>
                                </Typography>
                            ) : (
                                <MenuItem onClick={() => setAnchorElUser(false)}>
                                    <LoginKnap open={openModal} handleOpen={handleOpen} titel='Log ind på din konto' knaptext='Log ind'>
                                        <Login close={setOpenModal} lan={language} />
                                    </LoginKnap>
                                </MenuItem>)}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;