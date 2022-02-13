import React from 'react';
import { styled } from '@mui/material';
import TopNavbar from '../components/TopNavbar';
import HeroSection from './HeroSection';
import IntroductionSection from './IntroductionSection';

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
        <IntroductionSection />
      </ContentStyle>
    </>
  );
}