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
    id: 2,
    name: 'Pirate',
    position: 'Founder (CEO)',
    description: 'Pirate is the founder of the project. He has several years of experience in algotrading tests, his ambition is to bring this market to new horizons thanks to DeFi and the democratisation of NFTs. He is the one who writes the lines you are reading and is responsible for the whole artistic direction of the project (NFT, visuals, music etc), as well as the marketing, copywriting and social media part. He is the brain behind many of the ideas and initiatives of the Neurality project.',
    image: '/assets/images/pirate.png',
    linkedinUrl: 'https://www.linkedin.com/in/jerome-santangelo-256b7011a/'
  },
  {
    id: 1,
    name: 'Sid',
    position: 'Algotrader',
    description: 'Sid is the algotrader of the Neurality algorithm. He is a CFA (Chartered Financial Analyst) and FRM (Financial Risk Management) charterholder. He is passionate about algotrading and quant strategies and has 11 years of experience as a trader and especially 5 years of experience as an algotrader in a renowned algotrading company. He is also very interested in DeFi and cryptocurrencies. It is thanks to his expertise and work that we can now offer you such a service.',
    image: '/assets/images/sid.png',
    linkedinUrl: 'https://www.linkedin.com/in/fredericpaulus/'
  },
  {
    id: 3,
    name: 'New',
    position: 'Developer',
    description: 'New is the Web3 developer of the team. He is the one who coded the site you are currently on. He is an experienced web and blockchain developer. He started web development as a student and after graduation he jumped into the blockchain ocean. So far he has developed sites for e-commerce, human resource management, NFT marketplace and NFT currency. He is currently working on blockchain projects, including Neurality.',
    image: '/assets/images/new.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/maverick-sin-86966a229/'
  },
  {
    id: 4,
    name: 'Ben',
    position: 'Broker Partner',
    description: 'Ben has been working the FX brokering industry for almost a decade and has held numerous leadership roles in some of the largest brokers globally including OANDA and Axi. For the last 2 years Ben has been running Ox Securities which has grown to be a real global player in the FX and Crypto space. Ben brings expertise in management account technology and customised liquidity solutions.',
    image: '/assets/images/ben.jpg',
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