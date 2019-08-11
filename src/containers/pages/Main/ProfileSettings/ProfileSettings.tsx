import React from 'react';
import { Link } from 'react-router-dom';

import './profileSettings.css';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import ChangePasswordModal from '../../../modals/ChangePasswordModal/ChangePasswordModal';
import LogOut from '../../../../shared/components/LogOut/LogOut';
import UpdateMeForm from '../../../forms/UpdateMeForm/UpdateMeForm';


const ProfileSettings = () => {
  const handleClose = () => {
    console.log('sd')
  };
  return (
    <div className='paper'>
      <div className='paper-header'>
        <Link to='/profile/' style={{ width: '60px', height: '50px' }} aria-label='back'>
          <Fab variant="extended" aria-label="back" onClick={handleClose}>
            <Icon>arrow_back</Icon>
          </Fab>
        </Link>

        <h2>Profile settings</h2>
      </div>
      <div className='paper-actions'>

        <UpdateMeForm />

        <ChangePasswordModal/>
        <br/>
        <LogOut/>
      </div>
    </div>
  )
};

export default ProfileSettings;
