import React from 'react';
import { Box, Button as MuiButton, Container, Grid, Link, Stack, Typography, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import { MotionInView, varFadeInLeft, varFadeInRight } from '../animations';

const Button = styled(MuiButton)(({ theme }) => ({
  '&.MuiButton-root': {
    minWidth: 0
  }
}));

export default function Footer() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={{ xs: 5, md: 0 }}>
          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInLeft}>
              <Stack justifyContent="space-between" spacing={10}>
                <Box>
                  <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
                    <Box component="img" src="/assets/images/logo.jpg" alt="logo" width="60%" />
                  </Stack>
                  <Typography color={grey[400]} fontSize={18} textAlign={{ xs: 'center', md: 'left' }}>
                    7,777 unique mekas who need drivers.
                  </Typography>
                </Box>
                <Box>
                  <Typography color={grey[600]} textAlign={{ xs: 'center', md: 'left' }}>
                    ©{new Date().getFullYear()} Neurality. All rights reserved.
                  </Typography>
                </Box>
              </Stack>
            </MotionInView>
          </Grid>
          <Grid item xs={0} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInRight}>
              <Stack spacing={2}>
                <Typography color="white" fontSize={18} textAlign={{ xs: 'center', md: 'left' }}>Home</Typography>
                <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }}><Link href="#">Team</Link></Stack>
                <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }}><Link href="#">Terms & conditions</Link></Stack>
              </Stack>
              <Stack direction="row" justifyContent={{ xs: 'center', sm: 'left' }} spacing={1} mt={8}>
                <Button variant="contained" sx={{ borderRadius: 0, fontSize: 18, p: 1 }}>
                  <Icon icon="akar-icons:twitter-fill" />
                </Button>
                <Button variant="contained" sx={{ borderRadius: 0, fontSize: 18, p: 1 }}>
                  <Icon icon="akar-icons:discord-fill" />
                </Button>
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}