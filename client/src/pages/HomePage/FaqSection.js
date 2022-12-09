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
import { MotionInView, varFadeInDown, varFadeInUp } from '../../animations';

const data = [
  {
    question: 'How to invest?',
    answer: 'If you want to be part of the party, the one and only way is to get one of our NFTs. Without an NFT, you can\'t register. Then you need to fund your broker’s account to start trading with our algorithm.'
  },
  {
    question: 'How do you make the connection between the DeFi and the CeFi?',
    answer: 'It is very simple. An NFT gives you access to the registration form with our partner broker on a MAM account provided for this purpose.'
  },
  {
    question: 'What is a MAM account?',
    answer:
      'Multi-account trading. Individual investors advance capital and our robot makes trades that are replicated for all accounts in the pool. The profits are in proportion to the investment of each.'
  },
  {
    question: 'Can I deposit in BTC on your broker?',
    answer: 'Yes, you can. You can also use the fiat if you wish.'
  },
  {
    question: 'What are the advantages of owning our NFTs?',
    answer: 'Our collections are limited and will become increasingly inaccessible. The value of the NFT may explode as the community grows.'
  },
  {
    question: 'How safe is my money?',
    answer: 'Your money is safe with our regulated broker. Each investor keeps control of their funds and withdraws when they wish. We have no access to your funds.'
  },
  {
    question: 'Will I have to pay anything else after I buy the NFT?',
    answer: 'No, you won\'t. Your NFT access is valid for life, even if you sell it on the secondary market. With Neurality, there are no monthly subscriptions, licenses or hidden fees.'
  },
  {
    question: 'What is KYC?',
    answer: 'Know Your Customer is the name given to the process of verifying the identity of a company\'s customers.'
  }
];

export default function FaqSection() {
  return (
    <Box>
      <Container maxWidth="lg">
        <MotionInView variants={varFadeInUp}>
          <Typography
            fontSize={{ xl: 42, lg: 42, md: 36, sm: 32, xs: 24 }}
            fontWeight={700}
            color="white"
            textAlign="center"
          >
            F.A.Q.
          </Typography>
        </MotionInView>

        <Stack spacing={1} mt={{ xs: 2, sm: 5 }}>
          {
            data.map(dataItem => (
              <Box key={dataItem.question}>
                <MotionInView variants={varFadeInDown}>
                  <Accordion sx={{ bgcolor: grey[900] }}>
                    <AccordionSummary
                      expandIcon={<MuiIcon><Icon icon="bx:bx-chevron-down" /></MuiIcon>}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        fontSize={{ xs: 14, sm: 18 }}
                        fontWeight={700}
                      >{dataItem.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color={grey[500]} fontSize={{ xs: 14, sm: 18 }}>{dataItem.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </MotionInView>
              </Box>
            ))
          }
        </Stack>
      </Container>
    </Box>
  );
}
