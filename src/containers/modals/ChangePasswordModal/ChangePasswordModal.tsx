import React, { useState } from 'react';
import { connect } from 'react-redux';
// UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import './changePasswordModal.css';
import FetchError from '../../../shared/components/FetchError/FetchError';

import { getPasswordState, changePasswordError } from '../../../store/password/selectors';

import ChangePasswordForm from '../../forms/ChangePasswordForm/ChangePasswordForm';
import { Dispatch } from 'redux';

import { Actions } from '../../../store/password';
import { AppState } from '../../../store';

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
      height:' 60%',
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
    getPasswordState: getPasswordState(state),
    changePasswordError: changePasswordError(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePassword: () => dispatch(Actions.changePasswordAction.action())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ChangePasswordModal = (props: Props) => {
  const {
    changePassword,
    getPasswordState,
    changePasswordError
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
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <section style={modalStyle} className={classes.paper}>
          <Fab size="small" color="secondary" aria-label="add" className='close-btn' onClick={handleClose}>
            <Icon>close</Icon>
          </Fab>
          <h2 id="modal-title">Change Password</h2>
          {changePasswordError && <FetchError data={changePasswordError} />}
          {/* Info block */}
          {getPasswordState
          && getPasswordState.loaded
          && getPasswordState.data
          && getPasswordState.data.data
          && getPasswordState.data.data.changePassword
          && getPasswordState.data.data.changePassword.authToken
          && <p className='success-block'>password saved</p>
          }
          <ChangePasswordForm onSubmit={changeSubmit} loading={getPasswordState.loading}/>
        </section>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordModal);
