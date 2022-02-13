import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

export default function IntroductionSection() {
  return (
    <Container maxWidth="lg">
      <Grid container columns={2} spacing={5} alignItems="center">
        <Grid item md={1}>
          <Box component="img" src="/assets/images/landing-human.jpg" alt="landing-human" width="100%" />
        </Grid>
        <Grid item md={1}>
          <Stack spacing={4}>
            <Typography fontSize={48} fontWeight={700} lineHeight={1}>
              8,888 unique Mekas<br />
              <Typography fontSize="inherit" color="white" fontWeight="inherit">who need Drivers.</Typography>
            </Typography>

            <Typography color="white" fontSize={20}>
              The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes.
            </Typography>

            <Typography color="white" fontSize={20}>
              Each artwork is original, with its own color palette and creation. The objective was to make each Meka unique in order to prioritize quality above quantity.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}