import React from 'react';
import ProfileCard from '../components/profile/Information';
import StatisticsSection from '../components/profile/Statistics';

const ProfileView = () => {
    return (
        <div>
            <ProfileCard/>
            <StatisticsSection/>
        </div>
    )
}

export default ProfileView