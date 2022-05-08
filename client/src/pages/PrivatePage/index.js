import React from 'react';
import {
  Box,
  Stack
} from '@mui/material';

export default function PriavatePage() {
  return (
    <Box mt={10}>
      <Stack justifyContent="center" alignItems="center">
        <iframe
          src="https://trading.oxsecurities.com/open-live-account?iframe=1&unbranded=1"
          title="Iframe Example"
          className="w-full h-screen"
        ></iframe>
      </Stack>
    </Box>
  );
}