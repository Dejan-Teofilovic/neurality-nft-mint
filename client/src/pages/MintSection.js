import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Incrementer from '../components/Incrementor';

export default function MintSection() {
  return (
    <Box mt={{ xl: 10, lg: 10, md: 10, sm: 5, xs: 3 }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xl: 4, lg: 4, md: 4, sm: 2, xs: 2 }}>
          <Typography
            color={grey[100]}
            fontSize={{ xl: 42, lg: 42, md: 36, sm: 32, xs: 24 }}
            fontWeight={700}
            textTransform="uppercase"
            textAlign="center"
          >Mint</Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
            <Incrementer available={10} />
            <Button variant="contained" sx={{ borderRadius: 0, fontSize: { xs: 12, sm: 16, md: 20 } }}>Mint</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}