import React from 'react';
import {
  Container,
  Typography,
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon as MuiIcon
} from '@mui/material';
import { Icon } from '@iconify/react';
import { grey } from '@mui/material/colors';
import { varFadeInUp, MotionInView, varFadeInDown } from '../animations';


const data = [
  {
    question: 'Is EverETH on Binance Smart Chain or Ethereum network?',
    answer: 'The smaller fees always win. EverETH is on Binance Smart Chain.'
  },
  {
    question: 'When I will recieve my Ethereum dividends?',
    answer:
      'Our unique reward system is triggered by volume (buy + sell activity to cover gas fees).Payouts to holders may not occur every 30 minutes if the trading volume is low. When this is the case, the amount of rewarded Ethereum each holder will receive does not decrease. However, will accrue over a longer period of time until it is suitable for a payout to trigger (usually between 1-2 hours).'
  },
  {
    question: 'Where to check how much I earned?',
    answer:
      'Our developers created the EverETH dashboard where you can check your earnings live. Go to : https://EverETH.app Connect your wallet, or paste your wallet address. However there is another way to check your Ethereum balance: You simply need to add the custom token Binance-Peg Ethereum BEP20 to your wallet.'
  },
  {
    question: 'How do I get touch with the team?',
    answer: 'The best way to contact the team is through our Telegram. We are always available to help you!'
  }
];

export default function FaqSection() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h2" color="white" textAlign="center">
          F.A.Q.
        </Typography>

        <Stack spacing={1} mt={5}>
          {
            data.map(dataItem => (
              <Box key={dataItem.question}>
                <Accordion sx={{ bgcolor: grey[900] }}>
                  <AccordionSummary
                    expandIcon={<MuiIcon><Icon icon="bx:bx-chevron-down" /></MuiIcon>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography fontSize={18} fontWeight={700}>{dataItem.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color={grey[500]} fontSize={18}>{dataItem.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))
          }
        </Stack>
      </Container>
    </Box>
  );
}
