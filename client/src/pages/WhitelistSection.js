import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import useWhitelist from '../hooks/useWhitelist';
import useWallet from '../hooks/useWallet';
import useAlertMessage from '../hooks/useAlertMessage';
import { WARNING } from '../utils/constants';

export default function WhitelistSection() {
  const { activeWhitelist, addAddressToWhitelist, isWhitelisted } = useWhitelist();
  const { walletConnected, currentAccount } = useWallet();
  const { openAlert } = useAlertMessage();

  const registerIntoWhitelist = () => {
    if (walletConnected) {
      addAddressToWhitelist(currentAccount, activeWhitelist.id_whitelist);
    } else {
      openAlert({
        severity: WARNING,
        message: 'Please connect your wallet.'
      });
    }
  };

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
        fontWeight={700}
        textTransform="uppercase"
        textAlign="center"
      >Add To Whitelist</Typography>
      {
        isWhitelisted ? (
          <Typography textAlign="center">You're whitelisted.</Typography>
        ) : (
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
            <Typography>To be registered in {activeWhitelist.name}: </Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: 0, fontSize: { xs: 12, sm: 16, md: 20 } }}
              onClick={registerIntoWhitelist}
            >Click here</Button>
          </Stack>
        )
      }
    </Stack>
  );
}