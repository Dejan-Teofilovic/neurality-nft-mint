import React from 'react';
import { Box, Button, Container, Stack } from '@mui/material';
import { ethers } from "ethers";
import {
  CONTRACT_ABI,
  NFT_PRICE_WH2,
  NFT_PRICE_WH1,
  NFT_PRICE_PUBLIC,
  CONTRACT_ADDRESS
} from '../../utils/constants';
import api from '../../utils/api';
import useAlertMessage from '../../hooks/useAlertMessage';
import useWhitelist from '../../hooks/useWhitelist';
import useWallet from '../../hooks/useWallet';
import { MotionInView, varFadeInUp } from '../../animations';

export default function MintSection() {
  const { openAlert } = useAlertMessage();
  const { mintAvailableWhitelist } = useWhitelist();
  const { currentAccount } = useWallet();

  const mint = async () => {
    try {
      let transaction = null;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log('# process.env.REACT_APP_CONTRACT_ADDRESS: ', process.env.REACT_APP_CONTRACT_ADDRESS);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      if (mintAvailableWhitelist?.id_whitelist < 3) {
        const hexProof = (await api.post('/whitelist/getHexProof', { address: currentAccount, whitelistId: mintAvailableWhitelist.id_whitelist })).data;

        //  Whitelist 1
        if (mintAvailableWhitelist.id_whitelist === 1) {
          console.log('# hexProof: ', hexProof);
          transaction = await contract.privateMint(hexProof, { value: ethers.utils.parseEther(String(NFT_PRICE_WH1)) });
        } else if (mintAvailableWhitelist.id_whitelist === 2) {
          //  Whitelist 2
          transaction = await contract.privateMint(hexProof, { value: ethers.utils.parseEther(String(NFT_PRICE_WH2)) });
        }
      } else {
        console.log('# public');
        transaction = await contract.publicMint({ value: ethers.utils.parseEther(String(NFT_PRICE_PUBLIC)) });
      }
      await transaction.wait();
      console.log('# transaction-wait: ', transaction);

      openAlert({ severity: 'success', message: 'Minted!' });
    } catch (error) {
      openAlert({ severity: 'error', message: error.data ? error.data.message : 'Transaction is failed.' });
    }
  };

  return (
    <Box mt={{ xl: 10, lg: 10, md: 10, sm: 5, xs: 3 }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xl: 4, lg: 4, md: 4, sm: 2, xs: 2 }}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
            <MotionInView variants={varFadeInUp}>
              <Button
                variant="contained"
                sx={{ borderRadius: 0, fontSize: { xs: 12, sm: 16, md: 20 }, width: 200 }}
                onClick={mint}
              >Mint</Button>
            </MotionInView>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}