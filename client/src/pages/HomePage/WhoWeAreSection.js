import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { MotionInView, varFadeInDown, varFadeInUp } from '../../animations';

const DATA_OF_MEMBERS = [
  {
    id: 1,
    name: 'Sid',
    position: 'Algotrader',
    description: 'Behind the pseudonym "Sid" is the algotrader of the Neurality algorithm. He’s got a CFA (Chartered Financial Analyst) and a FRM (Financial Risk Management) graduation. He’s passionate about algotrading and quant strategies and he’s got a 11 years experience as a trader and more importantly a 5 years experience as an algotrader with a renowned algotrading company. He is also very interested in DeFi and cryptocurrencies. Thanks to his expertise and work we can offer you such a service today.',
    image: '/assets/images/sid.png'
  },
  {
    id: 2,
    name: 'Pirate',
    position: 'Founder (CEO)',
    description: 'Behind the pseudonym "Pirate" is Founder (CEO). He has several years of experience in algotrading tests, he is also passionate about DeFi and crypto-currencies. He is the one who writes the lines you are reading and is responsible for all the artistic direction of the project (NFT, visuals, music etc), as well as the marketing, copywriting, social networks part. He is the brain behind many of the ideas and initiatives on the Neurality project.',
    image: '/assets/images/pirate.png'
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
        <Box>
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
        <MotionInView variants={varFadeInDown}>
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
        </MotionInView>
      </Container>
    </Box >
  );
}