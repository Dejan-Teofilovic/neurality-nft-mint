import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Incrementer from '../components/Incrementor';

export default function MintSection() {
  return (
    <Stack
      maxWidth="lg"
      mx="auto"
      spacing={{ xl: 4, lg: 4, md: 4, sm: 2, xs: 2 }}
      mt={{ xl: 10, lg: 10, md: 10, sm: 5, xs: 3 }}
    >
      <Typography
        color={grey[100]}
        fontSize={{ xl: 56, lg: 56, md: 48, sm: 32, xs: 24 }}
        fontWeight={900}
        textTransform="uppercase"
        textAlign="center"
      >Mint</Typography>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
        <Incrementer available={10} />
        <Button variant="contained" sx={{ borderRadius: 0, fontSize: { xs: 12, sm: 16, md: 20 } }}>Mint</Button>
      </Stack>
    </Stack >
  );
}