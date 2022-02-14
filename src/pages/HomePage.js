import React from 'react';
import { Stack, styled } from '@mui/material';
import TopNavbar from '../components/TopNavbar';
import HeroSection from './HeroSection';
// import IntroductionSection from './IntroductionSection';
// import SlickCarouselSection from './SlickCarouselSection';
import RoadmapSection from './RoadmapSection';
import WhoWeAreSection from './WhoWeAreSection';
import JoinCommunitySection from './JoinCommunitySection';
import FaqSection from './FaqSection';
import Footer from '../components/Footer';
import MintSection from './MintSection';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

export default function HomePage() {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <ContentStyle>
        <Stack spacing={{ xs: 8, sm: 16, md: 20 }}>
          <MintSection />
          {/* <IntroductionSection /> */}
          {/* <SlickCarouselSection /> */}
          <RoadmapSection />
          <WhoWeAreSection />
          <FaqSection />
          {/* <JoinCommunitySection /> */}
        </Stack>
        {/* <Footer /> */}
      </ContentStyle>
    </>
  );
}