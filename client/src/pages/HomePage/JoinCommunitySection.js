import React from 'react';
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { MotionInView, varFadeInLeft, varFadeInRight } from '../../animations';

export default function JoinCommunitySection() {
  return (
    <Box sx={{ background: 'url(/assets/images/community.jpg)', backgroundSize: 'cover', backgroundPositionY: 'center' }} py={{ xs: 5, md: 10 }}>
      <Container maxWidth="lg">
        <Grid container columns={2}>
          <Grid item md={1}>
            <Stack spacing={2}>
              <MotionInView variants={varFadeInLeft}>
                <Typography
                  color="white"
                  fontSize={{ xs: 24, sm: 36, md: 48 }}
                  fontWeight={900}
                  textAlign={{ xs: 'center', md: 'left' }}
                >Join the community</Typography>
              </MotionInView>
              <MotionInView variants={varFadeInRight}>
                {/* <Typography
                  color="white"
                  fontSize={{ xs: 14, sm: 18 }}
                  lineHeight={{ xs: 1.5, sm: 2 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  MekaVerse Discord already has over 200,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.
                </Typography> */}
              </MotionInView>
              <MotionInView variants={varFadeInLeft}>
                <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'start' }}>
                  <Button
                    component={Link}
                    variant="contained"
                    sx={{ borderRadius: 0, fontSize: { xs: 14, sm: 18 }, py: 1, px: 3 }}
                    href="https://t.me/NeuralityProject"
                    target="_blank"
                  >
                    Join our Telegram
                  </Button>

                  <Button
                    component={Link}
                    variant="contained"
                    sx={{ borderRadius: 0, fontSize: { xs: 14, sm: 18 }, py: 1, px: 3 }}
                    href="https://twitter.com/NeuralityPro"
                    target="_blank"
                  >
                    Join our Twitter
                  </Button>
                </Stack>
              </MotionInView>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}