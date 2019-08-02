import React from 'react';

import './profile.css';

import ProfileSetingsModal from './ProfileSettingsModal/ProfileSetingsModal';

const Profile = () => {
    return (
        <main className='profile-page'>
            <div className='profile-info'>
                <h1>Profile</h1>
            </div>
            <ProfileSetingsModal />
        </main>
    )
};

export default Profile;