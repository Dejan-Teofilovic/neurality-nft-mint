import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  Container,
  // Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import { MotionInView, varFadeInDown, varFadeInUp } from '../../animations';

const DATA_1 = ['NFTs', 'Trading bot access', 'Discord access'];
// const DATA_2 = [
//   'Playtoearn game access: a retrowave car racing game',
//   'Token ICO'
// ];

export default function OverviewSection() {
  return (
    <Box mt={{ xl: 10, lg: 10, md: 10, sm: 5, xs: 3 }}>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInDown}>
          <Typography
            color={grey[100]}
            fontSize={{ xl: 42, lg: 42, md: 36, sm: 32, xs: 24 }}
            fontWeight={700}
            textTransform="uppercase"
            textAlign="center"
          >Overview</Typography>
        </MotionInView>

        <Stack direction="row" justifyContent="center" mt={3}>
          <MotionInView variants={varFadeInUp}>
            <Box component="img" src="/assets/images/overview.jpg" alt="" width={1000} />
          </MotionInView>
        </Stack>



        <MotionInView variants={varFadeInDown}>
          <Stack direction="row" justifyContent="center" mt={3}>
            <Card sx={{ height: '100%' }}>
              <CardHeader title="What I will get now after I mint" />
              <List>
                {
                  DATA_1.map(item => (
                    <ListItem key={item} sx={{ color: 'white' }}>
                      <ListItemIcon><Icon icon="bi:dot" /></ListItemIcon>
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                  ))
                }
              </List>
            </Card>
          </Stack>
          {/* <Grid container spacing={8} mt={1}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardHeader title="What I will get now after I mint" />
                <List>
                  {
                    DATA_1.map(item => (
                      <ListItem key={item} sx={{ color: 'white' }}>
                        <ListItemIcon><Icon icon="bi:dot" /></ListItemIcon>
                        <ListItemText>{item}</ListItemText>
                      </ListItem>
                    ))
                  }
                </List>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardHeader title="What I will get in the future" />
                <List>
                  {
                    DATA_2.map(item => (
                      <ListItem key={item} sx={{ color: 'white' }}>
                        <ListItemIcon><Icon icon="bi:dot" /></ListItemIcon>
                        <ListItemText>{item}</ListItemText>
                      </ListItem>
                    ))
                  }
                </List>
              </Card>
            </Grid>
          </Grid> */}
        </MotionInView>
        <MotionInView variants={varFadeInUp}>
          <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }} sx={{ mt: 5 }}>
            <Typography
              component="span"
              color={purple[700]}
              fontSize={{ xs: 14, sm: 18, md: 20 }}
              fontWeight={900}
            >Money doesn't grow on trees, it grows in our algorithms</Typography> <br />
            Usually, this kind of high-end service is aimed at large investors (minimum 50k per client). WE WANT TO CHANGE THE GAME! Because we want as many people as possible to be able to invest, we chose to use a MAM (Multi Account Manager) with our partner broker. We have created a win-win system for everyone, investors receive their profits in proportion to their investment automatically. We take NO commission on performances, whereas hedge funds and proprietary trading companies would reduce your profit by 40-60%. Thus your money stays safe on our regulated broker, on a segregated account and no one else can access it but you.
          </Typography>

          <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18, md: 20 }} sx={{ mt: 5 }}>
            <Typography
              component="span"
              color={purple[700]}
              fontSize={{ xs: 14, sm: 18, md: 20 }}
              fontWeight={900}
            >Sell your NFT and keep your access</Typography> <br />
            No matter if you got your NFT for free or not, you can sell it on OpenSea at any price you want. NEYX collections will be limited, so we invite you to feed a parallel market. When you resell our NFTs, we take 50%, you keep the rest. Your access is valid for life, even after reselling your NFT.
          </Typography>
        </MotionInView>

        <Stack direction="row" justifyContent="center" mt={3}>
          <MotionInView variants={varFadeInUp}>
            <Box component="img" src="/assets/images/resale.jpg" alt="" width={1000} />
          </MotionInView>
        </Stack>
      </Container>
    </Box>
  );
}