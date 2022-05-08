import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { MotionInView, varFadeInDown, varFadeInLeft, varFadeInRight, varFadeInUp } from '../../animations';

const DATA_OF_MEMBERS = [
  {
    id: 1,
    name: 'Sid',
    position: 'Programmer',
    description: 'Behind the pseudonym "Sid" is the programmer of the Neurality algorithm. He’s got a CFA (Chartered Financial Analyst) and a FRM (Financial Risk Management) graduation. He’s passionate about algotrading and quant strategies and he’s got a 11 years experience as a trader and more importantly a 5 years experience as an algotrader with a renowned algotrading company. He is also very interested in DeFi and cryptocurrencies. Thanks to his expertise and work we can offer you such a service today.',
    image: '/assets/images/sid.jpg'
  },
  {
    id: 2,
    name: 'Pirate',
    position: 'Sid\'s partner',
    description: 'Behind the pseudonym "Pirate" is Sid\'s partner. He has several years of experience in algotrading tests, he is also passionate about DeFi and crypto-currencies. He is the one who writes the lines you are reading and is responsible for all the artistic direction of the project (NFT, visuals, music etc), as well as the marketing, copywriting, social networks part. He is the brain behind many of the ideas and initiatives on the Neurality project.',
    image: '/assets/images/pirate.jpg'
  },
  {
    id: 3,
    name: 'New',
    position: 'Developer',
    description: 'Behind the name "New" is the Web3 developer of our team. He is the one who coded the site you are currently on. He is an experienced Web and Blockchain developer. He started web development when he was a student and after graduation, he jumped into the ocean of Blockchain. Until now, he has developed some sites for E-Commerce, HR management, NFT marketplace and NFT mint. Currently he is working on some Blockchain projects including Neurality.',
    image: '/assets/images/new.jpg'
  }
];

export default function WhoWeAreSection() {
  return (
    <Box>
      <Container maxWidth="lg">
        {/* <Grid container columns={5} spacing={{ xs: 2, sm: 5 }} alignItems="center">
          <Grid item xs={5} md={2}>
            <MotionInView variants={varFadeInLeft}>
              <Typography
                color={grey[500]}
                fontSize={{ xs: 24, sm: 36 }}
                fontWeight={700}
                textAlign={{ xs: 'center', md: 'left' }}
                lineHeight={1}
              >
                Who are we?
              </Typography>
              <Typography fontSize={{ xs: 24, sm: 36 }} fontWeight={700} textAlign={{ xs: 'center', md: 'left' }}>
                Creative teams
              </Typography>
            </MotionInView>
          </Grid>
          <Grid item md={3}>
            <MotionInView variants={varFadeInRight}>
              <Stack spacing={5}>
                <Typography
                  color={grey[500]}
                  fontSize={{ xs: 14, sm: 18 }}
                  lineHeight={2}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  Behind the pseudonym <Typography component="span" fontSize={{ xs: 16, sm: 20 }} color={purple[700]} fontWeight={700}>
                    "Sid"
                  </Typography> is the programmer of the Neurality algorithm. He’s got a CFA (Chartered Financial Analyst) and a FRM (Financial Risk Management) graduation. He’s passionate about algotrading and quant strategies and he’s got a 11 years experience as a trader and more importantly a 5 years experience as an algotrader with a renowned algotrading company. He is also very interested in DeFi and cryptocurrencies. Thanks to his expertise and work we can offer you such a service today.
                </Typography>
                <Typography
                  color={grey[500]}
                  fontSize={{ xs: 14, sm: 18 }}
                  lineHeight={2}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  Behind the pseudonym <Typography component="span" fontSize={{ xs: 16, sm: 20 }} color={purple[700]} fontWeight={700}>
                    "Pirate"
                  </Typography> is Sid's partner. He has several years of experience in algotrading tests, he is also passionate about DeFi and crypto-currencies. He is the one who writes the lines you are reading and is responsible for all the artistic direction of the project (NFT, visuals, music etc), as well as the marketing, copywriting, social networks part. He is the brain behind many of the ideas and initiatives on the Neurality project.
                </Typography>
                <Typography
                  color={grey[500]}
                  fontSize={{ xs: 14, sm: 18 }}
                  lineHeight={2}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  Behind the name <Typography component="span" fontSize={{ xs: 16, sm: 20 }} color={purple[700]} fontWeight={700}>
                    "Maverick"
                  </Typography> is the Web3 developer of our team. He is the one who coded the site you are currently on. He is an experienced Web and Blockchain developer. He started web development when he was a student and after graduation, he jumped into the ocean of Blockchain. Until now, he has developed some sites for E-Commerce, HR management, NFT marketplace and NFT mint. Currently he is working on some Blockchain projects including Neurality.
                </Typography>
              </Stack>
            </MotionInView>
          </Grid>
        </Grid> */}
        <Box>
          <MotionInView variants={varFadeInDown}>
            <Typography
              color={grey[100]}
              fontSize={{ xl: 18, lg: 18, md: 14, sm: 10, xs: 10 }}
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
            >Who are we?</Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              color={grey[100]}
              fontSize={{ xl: 42, lg: 42, md: 36, sm: 32, xs: 24 }}
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
            >Creative Teams</Typography>
          </MotionInView>
        </Box>
        <Grid container spacing={4} mt={2}>
          {
            DATA_OF_MEMBERS.map(dataItem => (
              <Grid item xs={12} sm={6} md={3} key={dataItem.id}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia component="img" alt={dataItem.name} image={dataItem.image} />
                  <CardContent>
                    <Stack spacing={1}>
                      <Typography fontSize={16} fontWeight={600}>{dataItem.position}</Typography>
                      <Typography textAlign="center" fontSize={24} fontWeight={800} color="white" letterSpacing={2}>
                        {dataItem.name}
                      </Typography>
                      <Typography fontSize={14} color={grey[300]}>{dataItem.description}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  );
}