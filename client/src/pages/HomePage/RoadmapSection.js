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
import { MotionInView, varFadeInUp, varFadeInRight, varFadeInDown } from '../../animations';

/* ------------------------------------------------------------------------------------------------------------- */

const DATA = [
  {
    id: '2022',
    title: 'Q3',
    description: 'Building community. Launch of NFT1 and access to trading bot through MAM',
    dotColor: '#d02560'
  },
  {
    id: '2022',
    title: 'Q4',
    description: 'Development of Unity 3D Play-to-earn car racing game and ICO/IDO landing page with smart contracts and music creation',
    dotColor: 'white'
  },
  {
    id: '2023',
    title: 'Q1',
    description: 'Launch of the Play-to-earn car racing game and ICO/ICO, Development of Metaverse V1, Staking, In-app purchase and Play-to-earn functionalities.',
    dotColor: 'white'
  },
  {
    id: '2023',
    title: 'Q2',
    description: 'Launch of Metaverse V1, Development of Metaverse V2. Complete Open-world immersion where users can buy anything, lands, properties, yachts, cars, even champagne with tokens or NFTs. The ability for the users to resell and get more ROI on their tokens.',
    dotColor: 'white'
  },
  {
    id: '2023',
    title: 'Q3-Q4',
    description: 'Development of Metaverse V2',
    dotColor: 'white'
  },
  {
    id: '2024',
    title: 'Q1-Q2',
    description: 'Launch of Metaverse V2',
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
                textTransform="uppercase"
              >Roadmap</Typography>
            </MotionInView>

            <Timeline>
              {DATA.map((item, index) => (
                <MotionInView key={index} variants={varFadeInDown}>
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
          <Grid item md={2}>
            <MotionInView variants={varFadeInRight}>
              <Stack
                alignItems="center"
                position="relative"
              >
                <Box
                  component="img"
                  src="/assets/images/roadmap-sign.png"
                  alt="roadmap"
                  zIndex={10}
                />
                <Box
                  component="img"
                  src="/assets/images/roadmap-rocket.png"
                  alt="roadmap"
                  width="90%"
                  zIndex={20}
                />
                <Box
                  component="img"
                  src="/assets/images/roadmap-smoke.png"
                  alt="roadmap"
                  position="absolute"
                  sx={{ bottom: 0 }}
                  zIndex={10}
                />
              </Stack>
              {/* <Box
                component="img"
                src="/assets/images/roadmap-hero.png"
                alt="roadmap"
                position="absolute"
                sx={{ top: 250, display: { xs: 'none', sm: 'none', md: 'block' } }}
              /> */}
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}