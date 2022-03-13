import React from 'react';
import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector
} from '@mui/lab';
import { Box, Container, Paper, Stack, Typography, Grid, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import { MotionInView, varFadeInUp, varFadeInRight, varFadeInDown } from '../animations';

/* ------------------------------------------------------------------------------------------------------------- */

const data = [
  {
    id: '01',
    title: 'Lanuch Roadmap',
    description: 'Quality comes first. The goal is to make our first drop as cool as possible so we can have freedom to develop the universe. We\'re still working on a number of rarity criteria, as well as a lot of new Lore concepts. The drop release date will be announced as soon as the project\'s quality and technical aspects are fully progressed. We also need to work hard with our community to make Discord and Twitter even cooler with new additions throughout time.',
    dotColor: '#d02560'
  },
  {
    id: '02',
    title: 'Physical Part',
    description: 'Mekas have a huge potential as physical creations. We are passionate about 3D printing and want to bring our concept to life with high-quality materials. After several talks with famous art toys makers, we are currently working on some concepts but wait, let’s keep a little mystery for the moment! We also aim to create clothing and merchandise using high-quality materials and textiles with eco-friendly fabrics. Also, Matt. B would love to explore a new and ambitious 3D Art Direction about streetwear and fashion in general. By following our design principles, we will do everything possible to create something amazing before, during, and after the launch of the first Drop!',
    dotColor: 'white'
  },
  {
    id: '03',
    title: 'MekaVerse x Artists',
    description: 'We know a lot of artists in the NFT community and beyond! We\'d like to develop a series in which each Meka is made in collaboration with artists we like and under their artistic direction.We would create a small collection of 1/1 unique Mekas by artists, with all proceeds going to them! This collection is incredibly important to us, and we are excited to see what we can accomplish together!',
    dotColor: 'white'
  },
  {
    id: '04',
    title: 'Meka Multiverse',
    description: 'After presenting our original Mekas, we want to explore more abstract subjects in order to present a second, very distinct drop. Our aim is simply to aesthetically enlarge the universe, and each relationship between the Meka Dimensions will be described and explained. We truly want to blend artistic disciplines, as well as move beyond our graphic style and look outside our comfort zone. We also want to see if it would be possible to collaborate with famous mecha licenses on future releases. That would be incredible!',
    dotColor: 'white'
  },
  {
    id: '05',
    title: 'Future of Mekas',
    description: 'When all of these stages are completed, we’ll take care of maintaining the Meka Universe. We both come from the design industry, and we are truly passionate about Art, Short films, Physical and Digital Exploration, and we would like to explore even more, with the desire to always make events more impressive and ambitious. We are counting on your support! We look forward to seeing what happens in the future! Love from Mekas ♥',
    dotColor: 'white'
  }
];

const TimelineItem = styled(MuiTimelineItem)(({ theme }) => ({
  '&.MuiTimelineItem-root:before': {
    flex: 'none'
  }
}));
/* ------------------------------------------------------------------------------------------------------------- */

export default function RoadmapSection() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container columns={5} spacing={5}>
          <Grid item md={3}>
            <MotionInView variants={varFadeInUp}>
              <Typography
                color="white"
                fontSize={{ xl: 42, lg: 42, md: 36, sm: 32, xs: 24 }}
                fontWeight={700}
                textAlign="center"
              >Roadmap</Typography>
              <Box maxWidth="sm" mx="auto" p={3}>
                <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18 }} textAlign="center" lineHeight={{ xs: 1.5, sm: 2 }}>
                  This roadmap outlines our goals and where we want to take MekaVerse. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!
                </Typography>
              </Box>
            </MotionInView>

            <Timeline>
              {data.map((item) => (
                <MotionInView key={item.id} variants={varFadeInDown}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ color: item.dotColor }} />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper sx={{ p: 3, bgcolor: 'grey.50012' }}>
                        <Typography fontSize={{ xs: 14, sm: 18 }} mb={2} fontWeight={800}>
                          .{item.id}&nbsp;
                          <Typography component="span" color="white" fontSize={{ xs: 18, sm: 28 }}>
                            {item.title}
                          </Typography>
                        </Typography>
                        <Stack spacing={2}>
                          <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18 }}>
                            {item.description}
                          </Typography>
                        </Stack>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                </MotionInView>
              ))}
            </Timeline>
          </Grid>
          <Grid item md={2} sx={{ position: 'relative' }}>
            <MotionInView variants={varFadeInRight}>
              <Box
                component="img"
                src="/assets/images/landing-human.jpg"
                alt="roadmap"
                position="absolute"
                sx={{ top: 250, display: { xs: 'none', sm: 'none', md: 'block' } }}
              />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}