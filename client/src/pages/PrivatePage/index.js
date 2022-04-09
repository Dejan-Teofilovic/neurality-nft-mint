import React from 'react';
import { 
  // Typography, 
  Box, 
  Stack 
} from '@mui/material';

export default function PriavatePage() {
  return (
    <Box mt={20}>
      {/* <Typography color="white" fontSize={48} fontWeight={700} textAlign="center">
        Private Page
      </Typography> */}
      <Stack justifyContent="center" alignItems="center">
        <iframe
          src="https://trading.oxsecurities.com/open-live-account?iframe=1&unbranded=1"
          title="Iframe Example"
          className="w-full h-lg"
        ></iframe>
      </Stack>
    </Box>
  );
}