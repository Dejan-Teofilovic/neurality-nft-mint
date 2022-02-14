import React from 'react';
import { Button, Stack, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Incrementer from '../../components/Incrementor';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[100]),
  fontSize: { xl: 16, lg: 16, md: 16, sm: 14, xs: 8 },
  width: '10%',
  backgroundColor: grey[100],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));

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
        <ColorButton>Mint</ColorButton>
      </Stack>
    </Stack>
  );
}