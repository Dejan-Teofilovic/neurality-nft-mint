import React from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { varFadeInRight } from '../animations';

export default function JoinCommunitySection() {
  return (
    <Box sx={{ background: 'url(/assets/images/community.jpg)', backgroundSize: 'cover', backgroundPositionY: 'center' }} py={10}>
      <Container maxWidth="lg">
        <Grid container columns={2}>
          <Grid item md={1}>
            <Stack spacing={2}>
              <Typography color="white" fontSize={48} fontWeight={900}>Join the community</Typography>
              <Typography color="white" fontSize={18} lineHeight={2}>MekaVerse Discord already has over 200,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.</Typography>
              <motion.div variants={varFadeInRight}>
                <Button variant="contained" sx={{ borderRadius: 0, fontSize: 18, py: 1, px: 3 }}>Join our Discord</Button>
              </motion.div>
            </Stack>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </Container>
    </Box >
  );
}