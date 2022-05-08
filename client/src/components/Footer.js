import React, { useState } from 'react';
import { Box, Button as MuiButton, Container, Grid, Link, Stack, Typography, styled, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { Icon } from '@iconify/react';
import { MotionInView, varFadeInLeft, varFadeInRight } from '../animations';

const TERMS_AND_POLICY = [
  {
    id: 1,
    title: 'Education Services',
    content: 'Neurality Project, LTD UK. (“Neurality Project”) does not present itself as a commodity trading advisor (“CTA”). Based on this representation, all information and materials provided by Neurality Project are for educational purposes only and should not be considered as specific investment advice. Neurality Project does not provide this information as advice, nor do we provide this information based on, or tailored to your situation or trading activity. The information we provide or that comes from our website should not replace the advice of an investment professional.'
  },
  {
    id: 2,
    title: 'Recognition and agreement of use',
    content: 'By using the services offered by Neurality Project, or by using this site, the user acknowledges that the author and all other entities associated with the Neurality Project can not be held liable for direct, indirect, consequential or damage of any kind whether resulting from this use, or the use of any information, signals, messages, education and any other information contained or disseminated with respect to its use and understanding. Use this site and the services offered by Neurality Project at your own risk. No guarantee of performance results, nor any expected return on investment, is offered at any time. Past performance does not prejudge future results. None of the information provided by Neurality Project constitutes an invitation to exchange currencies on Forex or to buy or sell a Forex contract.'
  },
  {
    id: 3,
    content: 'By using the Neurality Project Website and other services provided, you agree not to hold Neurality Project, nor any of its affiliates, for decisions based on information contained in blog posts, reader responses to articles blog, website or in promotional material.'
  },
  {
    id: 4,
    content: 'Notwithstanding any other agreement or other communication between Neurality Project and its customers or potential customers, receive or use any material provided by Neurality Project or access or use the Neurality Project Website, at any time and by any means, directly or indirectly indirectly, represents recognition and acceptance by that person of the above-mentioned conditions of the general disclaimer and the conditions of use.'
  },
  {
    id: 5,
    title: 'Exclusive information',
    content: 'You acknowledge and understand that Neurality Project has spent a lot of time and effort, and has incurred significant costs in developing its proprietary information. The information exclusive to Neurality Project is not in the public domain and reasonable measures are constantly being taken to ensure the confidentiality of this proprietary information. The term “Proprietary Information” means trade secrets, confidential knowledge, data or other proprietary information of Neurality Project. This proprietary information is protected by Uniform Trade Secrets. As an illustration, but not limited to, “proprietary information” includes trade secrets, inventions, ideas, diagrams, processes, formulas, trading methods, source and object codes, data, programs, compilations, written training course material, know-how, improvements. , discoveries, publications, developments, training courses, designs and techniques, information on research projects, development, new products, marketing and sales materials and methods, business plans, unpublished budgets and financial statements, licenses, modes of operation, prices and costs, business practices, sources and lists of customers and suppliers. Neurality Project derives its economic value, both real and potential, from the fact that its confidential information is not generally known or identifiable by others who may gain economic value through unauthorized disclosure or use. This proprietary information may not be used, reproduced or disclosed to any other party for any other purpose without the written permission of Neurality Project. In particular, you agree not to disclose to any person or entity, at any time and without the express written consent of Neurality Project, the Confidential Information of Neurality Project.'
  },
  {
    id: 6,
    title: 'Accuracy of information',
    content: 'The content of this website is subject to change at any time without notice. It is provided for the sole purpose of helping customers make independent decisions regarding their interests for Neurality Project products and the Forex market. Neurality Project has taken reasonable steps to ensure the accuracy of the information on this website. However, they do not guarantee the accuracy of the information and will not accept any responsibility for any loss or damage that may result directly or indirectly from the contentor your inability to access information. website, in the event of a delay or failure in the transmission or receipt of any instruction or notification sent through this website or otherwise distributed. Neurality Project or its affiliates make no express or implied warranty of accuracy or speed.'
  },
  {
    id: 7,
    title: 'Exclusion of guarantee',
    content: 'All information provided by Neurality Project or derived from the Neurality Project website is provided “as is” and Neurality Project makes no warranty, express or implied, including, without limitation, any warranties of merchantability or quality.'
  },
  {
    id: 8,
    title: 'Monitoring and recording of telephone calls',
    content: 'Neurality Project can monitor and record phone calls made to or from our offices for quality control and training purposes.'
  },
  {
    id: 9,
    title: 'Distribution',
    content: 'This site is not intended for distribution or use by anyone in any country where such distribution or use would be contrary to local law or regulation. None of the services or investments mentioned on this website are available for people residing in a country where the provision of such services or investments would be contrary to local law or regulation. Visitors to this website are responsible for ensuring conditions and compliance with local law or regulations.'
  },
  {
    id: 10,
    title: 'Customer testimonials',
    content: 'The testimonials found on this website may or may not be representative of all reasonably comparable customers. Past performance does not prejudge future results or success. The persons cited in the testimonies used were not paid to be cited unless they were specifically identified. The testimonials used on this website are not representative of all customers; some accounts may have lower performance than indicated. Individual results vary and there is no evidence that clients will realize or are likely to realize profits or losses that are comparable to those that may be presented.'
  },
  {
    id: 11,
    title: 'Third-party services',
    content: 'All links provided to other websites are provided for your convenience and do not imply that Neurality Project endorses, sponsors, promotes or is affiliated with the owners of these sites or their participants, or endorses or endorses them. guarantee all information contained on these sites, except express mention. In addition, Neurality Project does not endorse or guarantee any of the third-party products advertised on its site, in its promotional material or otherwise referenced in the information provided by Neurality Project or derived from the Neurality Project website, and Neurality Project expressly disclaims any liability and disclaims all liability for such information and products. Neurality Project may receive a fee from a service provider that has a link or advertisement on the Neurality Project website or is referenced in the information provided by Neurality Project.'
  },
  {
    id: 12,
    title: 'Our commitment to the privacy of children',
    content: 'Users of this website must be at least 18 years old and have the legal authority to accept the legal notice and the conditions of use. Neurality Project does not knowingly collect or solicit information from anyone under the age of 18. If you are under the age of 18, you must use this site only with the participation of a parent or guardian and not send us any personal information. In addition, we do not solicit, collect or store any information on our website from people we know in reality to be under the age of thirteen (13).'
  },
  {
    id: 13,
    title: 'Neurality Project Market Advisory',
    content: 'Statements regarding income, whether explicit or implicit, are NOT a guarantee. The opinions, news, research, analysis, prices or other information appearing on this website or other promotional material are provided as general market comments and are not in any way an investment advice or a solicitation to buy or sell Forex contracts or securities of any type. Neurality Project will not accept any liability for any loss or damage, including, without limitation, any loss of profit, which may result directly or indirectly from the use of or reliance on such information.'
  },
  {
    id: 14,
    content: 'The information contained on this web page does not constitute financial advice or solicitation to buy or sell securities of any type. Neurality Project will not accept any liability for any loss or damage, including, without limitation, loss of profit, which could result directly or indirectly from the use of or reliance on such information.'
  },
  {
    id: 15,
    title: 'Celebrity Support',
    content: 'Celebrity endorsers can be paid to recommend Neurality Project and his products. The content, including the positive reviews of Neurality Project and its programs, may not be neutral or independent.'
  },
  {
    id: 16,
    title: 'Cryptocurrency',
    content: 'Margin cryptocurrency trading carries a high level of risk and may not be suitable for everyone. Past performance does not represent future results. High leverage can be detrimental to you and you. Before you engage in cryptocurrency trading, you need to consider your personal business goals, your level of experience, and your appetite for risk. You may lose some or all of your initial deposit. Therefore, you should not invest funds that you can not afford to lose. You must be aware of all the risks associated with cryptocurrency trading and seek advice from an independent financial advisor if you have any doubts. The information contained in this web page does not constitute in any way financial advice or a solicitation to buy or sell contracts or securities with Cryptocurrency. Neurality Project will not accept any liability for any loss or damage, including, without limitation, loss of profit, which could result directly or indirectly from the use of or reliance on such information.'
  }
];

const CONTACT_INFOS = [
  {
    id: 1,
    content: '160 Kemp House, London EC1V 2NX, UK',
    icon: 'fa6-solid:location-dot'
  },
  {
    id: 2,
    content: '+123 456 7890',
    icon: 'bxs:phone'
  },
  {
    id: 3,
    content: 'info@neuralityproject.com',
    icon: 'clarity:email-solid'
  }
];

const Button = styled(MuiButton)(({ theme }) => ({
  '&.MuiButton-root': {
    minWidth: 0
  }
}));

export default function Footer() {
  const [opened, setOpened] = useState(false);

  const handleOpen = (_opened) => {
    setOpened(_opened);
  };

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 0 }}>
          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInLeft}>
              <Stack justifyContent="space-between" spacing={10}>
                <Box>
                  <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
                    <Box component="img" src="/assets/images/logo.png" alt="logo" width="60%" />
                  </Stack>
                  <Typography mt={2} color={grey[400]} fontSize={16} textAlign={{ xs: 'center', md: 'left' }}>
                    1,777 NFTs like No Others
                  </Typography>
                </Box>
                <Box>
                  <Typography color={grey[600]} textAlign={{ xs: 'center', md: 'left' }}>
                    © {new Date().getFullYear()} Neurality Project LTD
                  </Typography>
                </Box>
              </Stack>
            </MotionInView>
          </Grid>

          <Grid item xs={0} md={4}></Grid>

          <Grid item xs={12} md={4}>
            <MotionInView variants={varFadeInRight}>
              <Stack spacing={2}>
                <Typography color="white" fontSize={18} textAlign={{ xs: 'center', md: 'left' }} fontWeight={700}>
                  Contact Info
                </Typography>
                <List>
                  {CONTACT_INFOS.map(dataItem => (
                    <ListItem key={dataItem.id} sx={{ px: 0 }}>
                      <ListItemIcon><Icon icon={dataItem.icon} /></ListItemIcon>
                      <ListItemText sx={{ color: grey[400] }}>{dataItem.content}</ListItemText>
                    </ListItem>
                  ))}
                </List>
                <Stack direction="row" justifyContent={{ xs: 'center', md: 'left' }}>
                  <Button onClick={() => handleOpen(true)}>Terms & conditions</Button>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent={{ xs: 'center', sm: 'left' }} spacing={1} mt={8}>
                <Button
                  component={Link}
                  variant="contained"
                  sx={{ borderRadius: 0, fontSize: 18, p: 1 }}
                  href="https://t.me/NeuralityProject"
                >
                  <Icon icon="bxl:telegram" />
                </Button>

                <Button
                  component={Link}
                  variant="contained"
                  sx={{ borderRadius: 0, fontSize: 18, p: 1 }}
                  href="https://twitter.com/NeuralityPro"
                >
                  <Icon icon="akar-icons:twitter-fill" />
                </Button>
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={opened}
        onClose={() => handleOpen(false)}
      >
        <DialogTitle>Terms & Policy</DialogTitle>
        <DialogContent sx={{ my: 2 }}>
          <DialogContentText id="alert-dialog-description">
            <Stack spacing={3}>
              {TERMS_AND_POLICY.map(dataItem => (
                <Box key={dataItem.id}>
                  {dataItem.title && (<Typography fontSize={16} color={purple[600]}>{dataItem.title}</Typography>)}
                  <Typography fontSize={14} color={grey[300]}>{dataItem.content}</Typography>
                </Box>
              ))}
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => handleOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}