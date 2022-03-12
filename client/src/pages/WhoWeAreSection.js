import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function WhoWeAreSection() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container columns={5} spacing={{ xs: 2, sm: 5 }} alignItems="center">
          <Grid item xs={5} md={2}>
            <Typography
              color={grey[500]}
              fontSize={{ xs: 24, sm: 36 }}
              fontWeight={700}
              textAlign={{ xs: 'center', md: 'right' }}
              lineHeight={1}
            >
              Who are we?
            </Typography>
            <Typography fontSize={{ xs: 24, sm: 36 }} fontWeight={700} textAlign={{ xs: 'center', md: 'right' }}>
              Creative teams
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18 }} lineHeight={2} textAlign={{ xs: 'center', md: 'right' }}>
              Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art direction. We have been working hard to establish our own style, and we're continuously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}