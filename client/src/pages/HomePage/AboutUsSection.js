import React from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animations';

export default function AboutUsSection() {
  return (
    <Box mt={{ xl: 10, lg: 10, md: 10, sm: 5, xs: 3 }}>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          <Stack mt={5} spacing={3}>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }}>
              NEYX City, 2077. Artificial intelligence is omnipresent on planet earth. Robots, then much more intelligent, have ended up replacing humans in their work and in their daily tasks. Humans find themselves free of all financial constraints, but subject to a world governed by algorithms. The population is totally dependent on these technologies and cannot survive without them. In this hyper-connected society, every citizen derives his or her primary income from robots and AI that perform in decentralized finance and traditional financial markets. This story could soon become yours. Welcome to the Neurality Project matrix.
            </Typography>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }}>
              Here you will find out how banks and hedge funds have been getting rich for years and how you can do the same thing as them without any prior knowledge of the financial markets, without spending hours behind the graphs and without any mental burden for you as an investor, with monthly returns of 20%. Yes, you read that right. Intrigued? Read on.
            </Typography>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }}>
              <Typography
                component="span"
                color={purple[700]}
                fontSize={{ xs: 14, sm: 18, md: 20 }}
                fontWeight={900}
              >How such a return is possible?</Typography> <br />
              Neurality is the end result of 5 long years of evolution of an algotrading strategy that trades the XAU/USD known as Gold pair. Situated between the scalper and the intraday, NEYX is coded behind an IA (Intelligent Automation) and embeds a hundred decisional strategies behind a Neural Network/Deep Learning prediction system coupled with a smart grid calculation system, without using martingale or any dangerous strategies. Neurality is able to adapt itself to market fluctuations by diminishing the impact of Gold volatility. In short, it's a cash machine.
              The numbers never lie, see for yourself with this 6 months real account statement, a low drawdown for a total profit of <Typography component="span" fontSize={{ xs: 14, sm: 18, md: 20 }} fontWeight={800}>$76927</Typography>.
            </Typography>

            <MotionInView variants={varFadeInDown}>
              <Stack direction="row" justifyContent="center">
                <Box component="img" src="/assets/images/chart.png" alt="" width="90%" />
              </Stack>
            </MotionInView>

            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }}>
              Usually, this kind of high-end service is aimed at large investors (minimum 50k per client). WE WANT TO CHANGE THE GAME! Because we want as many people as possible to be able to invest, we chose to use a MAM (Multi Account Manager) with our partner broker. We have created a win-win system for everyone, investors receive their profits in proportion to their investment automatically. We take NO commission on performances, whereas hedge funds and proprietary trading companies would reduce your profit by 40-60%. Thus your money stays safe on our regulated broker, on a segregated account and no one else can access it but you.
            </Typography>
            <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }}>
              <Typography
                component="span"
                color={purple[700]}
                fontSize={{ xs: 14, sm: 18, md: 20 }}
                fontWeight={900}
              >Neurality, a rocket ship for Elysium?</Typography> <br />
              We live in a fast-paced world, and the trading business is no exception. Today, the majority of transactions in the financial markets are issued by robots. Just look at the empty trading floors on Wall Street, where there are far more computers than humans. If you are one of those who place orders by hand today, you are at a significant disadvantage. Humans have their vices and limitations, but robots, unlike humans, have no emotions, no need to sleep, and virtually no limits. Moreover, because of the economic and political context we live in, we share a sense of urgency about the race to the Elysium. Indeed, the gap between rich and poor is widening dramatically every year. We believe that the social ladder could be threatened by powerful entities that want a monopoly on power. With Neurality, we want to help keep the social lift working. A collection of 1,777 pieces will be available soon and I guarantee you won't want to miss it.
            </Typography>
          </Stack>
        </MotionInView>
      </Container>
    </Box>
  );
}