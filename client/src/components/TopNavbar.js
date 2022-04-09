import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Stack, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import useOffSetTop from '../hooks/useOffSetTop';
import useWallet from '../hooks/useWallet';
import { MotionInView, varFadeInLeft, varFadeInRight } from '../animations';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function TopNavbar() {
  const navigate = useNavigate();
  const isOffset = useOffSetTop(100);
  const { connectWallet, currentAccount, walletConnected, tokenId, disconnectWallet } = useWallet();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDisconnect = () => {
    disconnectWallet();
    setAnchorElUser(null);
    navigate('/');
  };

  const handlePrivatePage = () => {
    navigate(`/user/${currentAccount}`);
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', height: 'auto' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <MotionInView variants={varFadeInLeft}>
            <RouterLink to="/">
              <Box component="img" src="/assets/images/logo.jpg" alt="logo" width={{ xs: 140, sm: 180, md: 220 }} />
            </RouterLink>
          </MotionInView>
          <MotionInView variants={varFadeInRight}>

            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
              <Stack direction="row" justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', sm: 'block' } }}>
                <IconButton sx={{ color: grey[100], fontSize: { xs: 16, sm: 20, md: 24 } }}>
                  <Icon icon="akar-icons:discord-fill" />
                </IconButton>

                <IconButton sx={{ color: grey[100], fontSize: { xs: 16, sm: 20, md: 24 } }}>
                  <Icon icon="akar-icons:twitter-fill" />
                </IconButton>
              </Stack>
              {
                walletConnected ? (<>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 0, fontSize: { xs: 10, sm: 14, md: 18 } }}
                    onClick={handleOpenUserMenu}
                  >
                    {`${currentAccount.slice(0, 8)}...${currentAccount.slice(-4)}`}
                  </Button>
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
                    <MenuItem onClick={handleDisconnect}>
                      <Typography textAlign="center" color="white">Disconnect</Typography>
                    </MenuItem>
                    {console.log('# tokenId => ', tokenId)}
                    {
                      tokenId > 0 && (
                        <MenuItem onClick={handlePrivatePage}>
                          <Typography textAlign="center" color="white">Private Page</Typography>
                        </MenuItem>
                      )
                    }
                  </Menu>
                </>) : (
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 0, fontSize: { xs: 10, sm: 14, md: 18 } }}
                    onClick={() => connectWallet()}
                  >Connect Wallet</Button>
                )
              }
            </Stack>
          </MotionInView>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
