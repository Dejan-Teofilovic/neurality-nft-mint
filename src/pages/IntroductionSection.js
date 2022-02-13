import React from 'react';
import { Box, Container, Grid } from '@mui/material';

export default function IntroductionSection() {
  return (
    <Container maxWidth="lg">
      <Grid container columns={2} spacing={2} alignItems="center">
        <Grid item md={6}>
          <Box component="img" src="/assets/images/landing-human.jpg" alt="landing-human" width="100%" />
        </Grid>
        <Grid item md={6}>

        </Grid>
      </Grid>
    </Container>
  );
}