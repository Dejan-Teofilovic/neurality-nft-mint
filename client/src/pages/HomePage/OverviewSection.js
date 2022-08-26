import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import { MotionInView, varFadeInDown, varFadeInUp } from '../../animations';

const DATA_1 = ['NFTs', 'Trading bot access', 'Discord access'];
const DATA_2 = [
  'Playtoearn game access: a retrowave car racing game',
  'Token ICO'
];

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
            <Box component="img" src="/assets/images/overview.jpg" alt="" width={500} />
          </MotionInView>
        </Stack>

        <MotionInView variants={varFadeInDown}>
          <Grid container spacing={8} mt={1}>
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
          </Grid>
        </MotionInView>
      </Container>
    </Box>
  );
}