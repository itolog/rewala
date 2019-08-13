import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
// UI
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import FetchError from '../../../shared/components/FetchError/FetchError';
import './changePasswordModal.css';

import { changePasswordError, getPasswordState } from '../../../store/password/selectors';

import { Dispatch } from 'redux';
import ChangePasswordForm from '../../forms/ChangePasswordForm/ChangePasswordForm';

import { AppState } from '../../../store';
import { Actions } from '../../../store/password';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column',
      width: '80%',
      height: ' 60%',
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[ 5 ],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
    },
  }),
);

const mapStateToProps = (state: AppState) => {
  return {
    getPassword: getPasswordState(state),
    changePasswordErrors: changePasswordError(state),
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePassword: () => dispatch(Actions.changePasswordAction.action()),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ChangePasswordModal = (props: Props) => {
  const {
    changePassword,
    getPassword,
    changePasswordErrors,
  } = props;
  const classes = useStyles();
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeSubmit = () => {
    changePassword();
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleOpen}>
        Change Password
      </Button>
      <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <section style={modalStyle} className={classes.paper}>
          <Fab size='small' color='secondary' aria-label='add' className='close-btn' onClick={handleClose}>
            <Icon>close</Icon>
          </Fab>
          <h2 id='modal-title'>Change Password</h2>
          {changePasswordErrors && <FetchError data={changePasswordErrors}/>}
          {/* Info block */}
          {getPassword
          && getPassword.loading && <p className='info-block'>loding ...</p>}
          {getPassword
          && getPassword.loaded
          && getPassword.data
          && getPassword.data.data
          && getPassword.data.data.changePassword
          && getPassword.data.data.changePassword.authToken
          && <p className='success-block'>password saved</p>
          }
          <ChangePasswordForm onSubmit={changeSubmit} loading={getPassword.loading}/>
        </section>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordModal);
