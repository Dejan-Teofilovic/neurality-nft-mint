import React from 'react';
import { Stack, styled } from '@mui/material';
import TopNavbar from '../components/TopNavbar';
import HeroSection from './HeroSection';
import RoadmapSection from './RoadmapSection';
import WhoWeAreSection from './WhoWeAreSection';
import JoinCommunitySection from './JoinCommunitySection';
import FaqSection from './FaqSection';
import Footer from '../components/Footer';
import WhitelistSection from './WhitelistSection';
import AlertMessage from '../components/AlertMessage';
import useAlertMessage from '../hooks/useAlertMessage';
import useWhitelist from '../hooks/useWhitelist';
import useWallet from '../hooks/useWallet';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

export default function HomePage() {
  const { severity } = useAlertMessage();
  const { activeWhitelist } = useWhitelist();
  const { walletConnected } = useWallet();

  return (
    <>
      <HeroSection />
      <ContentStyle>
        <Stack spacing={{ xs: 8, sm: 16, md: 20 }}>
          {
            (activeWhitelist && walletConnected) && <WhitelistSection />
          }
          <RoadmapSection />
          <WhoWeAreSection />
          <FaqSection />
          <JoinCommunitySection />
        </Stack>
        <Footer />
      </ContentStyle>
      {severity && <AlertMessage />}
    </>
  );
}