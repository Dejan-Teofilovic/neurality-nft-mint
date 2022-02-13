import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, useMediaQuery, Stack, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import useOffSetTop from '../hooks/useOffSetTop';

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
  const isOffset = useOffSetTop(100);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', height: 'auto' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
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
          <RouterLink to="/">
            <Box component="img" src="/assets/images/logo.jpg" alt="logo" width={isDesktop ? 200 : 80} />
          </RouterLink>

          <Stack direction="row" justifyContent="center" alignItems="center">
            <IconButton sx={{ color: grey[100] }}>
              <Icon icon="ant-design:instagram-filled" />
            </IconButton>

            <IconButton sx={{ color: grey[100] }}>
              <Icon icon="akar-icons:discord-fill" />
            </IconButton>

            <IconButton sx={{ color: grey[100] }}>
              <Icon icon="akar-icons:twitter-fill" />
            </IconButton>
          </Stack>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
