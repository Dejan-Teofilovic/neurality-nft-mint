import React from 'react';
import { Box, Button as MuiButton, Container, Grid, Link, Stack, Typography, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';

const Button = styled(MuiButton)(({ theme }) => ({
  '&.MuiButton-root': {
    minWidth: 0
  }
}));

export default function Footer() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item md={4}>
            <Stack justifyContent="space-between" spacing={10}>
              <Box>
                <Box component="img" src="/assets/images/logo.jpg" alt="logo" width="60%" />
                <Typography color={grey[400]} fontSize={18}>
                  8,888 unique mekas who need drivers.
                </Typography>
              </Box>
              <Box>
                <Typography color={grey[600]}>
                  ©2022 Neurality. All rights reserved.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Stack spacing={2}>
              <Typography color="white" fontSize={18}>Home</Typography>
              <Box><Link href="#">Team</Link></Box>
              <Box><Link href="#">Terms & conditions</Link></Box>
            </Stack>
            <Stack direction="row" spacing={1} mt={8}>
              <Button variant="contained" sx={{ borderRadius: 0, fontSize: 18, p: 1 }}>
                <Icon icon="akar-icons:twitter-fill" />
              </Button>
              <Button variant="contained" sx={{ borderRadius: 0, fontSize: 18, p: 1 }}>
                <Icon icon="akar-icons:discord-fill" />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}