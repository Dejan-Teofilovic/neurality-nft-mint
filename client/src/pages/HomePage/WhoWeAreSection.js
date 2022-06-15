import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import { MotionInView, varFadeInDown, varFadeInUp } from '../../animations';
import Carousel from '../../components/Carousel';
import MHidden from '../../components/@mui-extend/MHidden';

const DATA_OF_MEMBERS = [
  {
    id: 1,
    name: 'Sid',
    position: 'Algotrader',
    description: 'Behind the pseudonym "Sid" is the algotrader of the Neurality algorithm. He’s got a CFA (Chartered Financial Analyst) and a FRM (Financial Risk Management) graduation. He’s passionate about algotrading and quant strategies and he’s got a 11 years experience as a trader and more importantly a 5 years experience as an algotrader with a renowned algotrading company. He is also very interested in DeFi and cryptocurrencies. Thanks to his expertise and work we can offer you such a service today.',
    image: '/assets/images/sid.png',
    linkedinUrl: 'https://www.linkedin.com/in/fredericpaulus/'
  },
  {
    id: 2,
    name: 'Pirate',
    position: 'Founder (CEO)',
    description: 'Behind the pseudonym "Pirate" is Founder (CEO). He has several years of experience in algotrading tests, he is also passionate about DeFi and crypto-currencies. He is the one who writes the lines you are reading and is responsible for all the artistic direction of the project (NFT, visuals, music etc), as well as the marketing, copywriting, social networks part. He is the brain behind many of the ideas and initiatives on the Neurality project.',
    image: '/assets/images/pirate.png',
    linkedinUrl: 'https://www.linkedin.com/in/jerome-santangelo-256b7011a/'
  },
  {
    id: 3,
    name: 'New',
    position: 'Developer',
    description: 'Behind the name "New" is the Web3 developer of our team. He is the one who coded the site you are currently on. He is an experienced Web and Blockchain developer. He started web development when he was a student and after graduation, he jumped into the ocean of Blockchain. Until now, he has developed some sites for E-Commerce, HR management, NFT marketplace and NFT mint. Currently he is working on some Blockchain projects including Neurality.',
    image: '/assets/images/new.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/maverick-sin-86966a229/'
  },
  {
    id: 4,
    name: 'Ben',
    position: 'Dummy',
    description: 'Ben has been working the FX brokering industry for almost a decade and has held numerous leadership roles in some of the largest brokers globally including OANDA and Axi. For the last 2 years Ben has been running Ox Securities which has grown to be a real global player in the FX and Crypto space. Ben brings expertise in management account technology and customised liquidity solutions.',
    image: '/assets/images/ben.png',
    linkedinUrl: 'https://www.linkedin.com/in/ben-malone-737144143/'
  }
];

const SLIDE_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 9000,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, centerPadding: '0' }
    }
  ]
};

const ProfileCard = ({ dataItem }) => (
  <Card
    sx={{
      height: '99%',
      mx: 1,
      display: 'flex',
      flexDirection: 'column'
    }}
    key={dataItem.id}
  >
    <CardMedia component="img" alt={dataItem.name} image={dataItem.image} />
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
      }}
    >
      <Stack spacing={1}>
        <Typography fontSize={16} fontWeight={600}>
          {dataItem.position}
        </Typography>
        <Typography
          textAlign="center"
          fontSize={24}
          fontWeight={800}
          color="white"
          letterSpacing={2}
        >
          {dataItem.name}
        </Typography>
        <Typography fontSize={14} color={grey[300]}>
          {dataItem.description}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="center" alignItems="center" mt={3}>
        <IconButton component={Link} href={dataItem.linkedinUrl} target="_blank">
          <Icon icon="akar-icons:linkedin-box-fill" />
        </IconButton>
      </Stack>
    </CardContent>
  </Card>
);

export default function WhoWeAreSection() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box>
          <MotionInView variants={varFadeInUp}>
            <Typography
              color={grey[100]}
              fontSize={{ xl: 42, lg: 42, md: 36, sm: 32, xs: 24 }}
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
            >Creative Team</Typography>
          </MotionInView>
        </Box>
        <MotionInView variants={varFadeInDown}>
          <MHidden width="mdUp">
            <Box mt={2}>
              <Carousel
                slideSettings={SLIDE_SETTINGS}
                carouselItemComponent={ProfileCard}
                data={DATA_OF_MEMBERS}
              />
            </Box>
          </MHidden>
          <MHidden width="mdDown">
            <Grid container mt={2} spacing={1}>
              {
                DATA_OF_MEMBERS.map(dataItem => (
                  <Grid item md={3} key={dataItem.id}>
                    <ProfileCard dataItem={dataItem} />
                  </Grid>
                ))
              }
            </Grid>
          </MHidden>
        </MotionInView>
      </Container>
    </Box >
  );
}