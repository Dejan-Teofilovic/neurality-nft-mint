import React from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { grey } from '@mui/material/colors';
import { MotionInView, varFadeInUp, varFadeInDown } from '../animations';

export default function AboutUsSection() {
  return (
    <Box mt={{ xl: 10, lg: 10, md: 10, sm: 5, xs: 3 }}>
      <Container maxWidth="lg">
        <Box>
          <MotionInView variants={varFadeInUp}>
            <Typography
              color={grey[100]}
              fontSize={{ xl: 18, lg: 18, md: 14, sm: 10, xs: 10 }}
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
            >We are what we build</Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              color={grey[100]}
              fontSize={{ xl: 42, lg: 42, md: 36, sm: 32, xs: 24 }}
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
            >About Us</Typography>
          </MotionInView>
        </Box>
        <Stack direction="row" justifyContent="center" mt={3}>
          <MotionInView variants={varFadeInDown}>
            <Box component="img" src="/assets/images/roadmap.jpg" alt="" width={500} />
          </MotionInView>
        </Stack>
        <MotionInView variants={varFadeInUp}>
          <Stack mt={5} spacing={3}>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 24 }}>
              AlgoFX offers automated trading solutions coupled with intelligent automation (IA), for savvy investors, private traders and trading service providers.
            </Typography>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 24 }}>
              AlgoFX provides turnkey infrastructure in a “black box” mode, and supports its management. All you have to do is let the earnings come.
            </Typography>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 24 }}>
              AlgoFX has a mission to produce these strategies of algorithmic trading qualities. Offered in the form of leasing, AlgoFX provides in addition to its automated trading solution the entire infrastructure, from hosting to the web tools necessary for the proper management of your personnal or client portfolio.
            </Typography>
          </Stack>
        </MotionInView>
      </Container>
    </Box>
  );
}