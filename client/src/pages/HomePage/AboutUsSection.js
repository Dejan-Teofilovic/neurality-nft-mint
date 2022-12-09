import React from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { MotionInView, varFadeInUp } from '../../animations';

export default function AboutUsSection() {
  return (
    <Box mt={{ xl: 10, lg: 10, md: 10, sm: 5, xs: 3 }}>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          <Stack mt={5} spacing={3}>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }}>
              <Typography component="span" fontWeight={900} fontSize="inherit">
                NEYX
              </Typography> City, 2077. Artificial intelligence is omnipresent on planet earth. Robots, then much more intelligent, have ended up replacing humans in their work and in their daily tasks. Humans find themselves free of all financial constraints, but subject to a world governed by algorithms. The population is totally dependent on these technologies and cannot survive without them. In this hyper-connected society, every citizen derives his or her primary income from robots and AI that perform in decentralized finance and traditional financial markets. This story could soon become yours. Welcome to the Neurality Project matrix.
            </Typography>

            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }}>
              <Typography
                component="span"
                color={purple[700]}
                fontSize={{ xs: 14, sm: 18, md: 20 }}
                fontWeight={900}
              >
                Money doesn't grow on trees, it grows in our algorithms
              </Typography> <br />
              Neurality Project is the final result of several years of evolution of an algotrading strategy that trades the XAU/USD pair called Gold. Scalping one by one, deferred orders, with a maximum risk of 1% per position, based on an AI engine with risk management adapted to sudden fluctuations in the price of gold. Orders last only a few seconds and are placed from a server capable of supporting very fast transmission times, with a latency of less than a millisecond. Over the past few years we have tested hundreds of trading robots, but we have never had as much confidence in an algorithm as we do with NEYX. There is no need for a human presence, the robot is fully autonomous, whatever the market conditions.
              {/* <Typography component="span" fontSize={{ xs: 14, sm: 18, md: 20 }} fontWeight={800}>$76927</Typography>. */}
            </Typography>

            {/* <MotionInView variants={varFadeInDown}>
              <Stack direction="row" justifyContent="center">
                <Box component="img" src="/assets/images/chart.png" alt="" width="90%" />
              </Stack>
            </MotionInView> */}
            
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }}>
              <Typography
                component="span"
                color={purple[700]}
                fontSize={{ xs: 14, sm: 18, md: 20 }}
                fontWeight={900}
              >We trust in the process</Typography> <br />
              We live in a fast-paced world, and the trading business is no exception. Today, the majority of transactions in the financial markets are issued by robots. Just look at the empty trading floors on Wall Street, where there are far more computers than humans. If you are one of those who place orders by hand today, you are at a significant disadvantage. Humans have their vices and limitations, but robots, unlike humans, have no emotions, no need to sleep, and virtually no limits. Moreover, because of the economic and political context we live in, we share a sense of urgency. Indeed, the gap between the rich and the poor is widening considerably every year. We believe that the social elevator could be threatened. Neurality comes to redistribute the cards.
            </Typography>
          </Stack>
        </MotionInView>
      </Container>
    </Box>
  );
}