import React from 'react';
// UI
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import './profileSettingsModal.css';

import LogOut from '../../LogOut/LogOut';
import ChangePasswordModal from '../ChangePasswordModal/ChangePasswordModal';

function ProfileSettingsModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Profile Settings
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className='paper'>
                    <div className='paper-header'>
                        <Fab variant="extended" aria-label="back" onClick={handleClose} >
                            <Icon>arrow_back</Icon>
                        </Fab>
                        <h2>Profile settings</h2>
                    </div>
                    <div className='paper-actions'>
                        <ChangePasswordModal />
                        <br/>
                        <LogOut/>
                    </div>

                </div>
            </Modal>
        </section>
    );
}

export default ProfileSettingsModal;