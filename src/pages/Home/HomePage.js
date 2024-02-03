import React from 'react';
import HeroSection from '../../components/HeroSection';
import TeamPage from './TeamPage';
import QuotePage from './QuotePage';
import GalleryPage from './GalleryPage';
import StoryPage from './StoryPage';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <StoryPage/>
            <GalleryPage/>
            <QuotePage/>
            <TeamPage/>
        </div>
    );
}

export default HomePage;
