import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import './confirmCodeModal.css';

import { Actions } from '../../../store/password';
import { getResetPasswordState } from '../../../store/password/selectors';

import ResetPasswordConfirm from '../../components/ResetPasswordConfirm/ResetPasswordConfirm';
import ResetPasswordForm from '../../forms/ResetPasswordForm/ResetPasswordForm';

import { AppState } from '../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getResetPasswordState: getResetPasswordState(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPassword: () => dispatch(Actions.resetPasswordAction.action())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;


const ResetPasswordModal = (props: Props) => {
  const { resetPassword, getResetPasswordState } = props;
  const isSendEmail = getResetPasswordState.data
    && getResetPasswordState.data.data
    && getResetPasswordState.data.data.resetPassword;

  const [ open, setOpen ] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    resetPassword();
  };

  return (
    <section>
      <Button variant="outlined" onClick={handleOpen}>
        forgot password?
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className='confirm-code'>
          <h2>Rewala</h2>
          {/*  ERRORS  */}
          {getResetPasswordState && getResetPasswordState.data && getResetPasswordState.data.errors && getResetPasswordState.data.errors.map((item: any, index: number) => {
            return (
              <p key={index}>{item.message}</p>
            )
          })}
          {/* FORM Reset */}
          {!isSendEmail && <ResetPasswordForm onSubmit={handleOnSubmit}/>}
          {/*  Reset Confirm Component */}
          {isSendEmail && <ResetPasswordConfirm /> }
          {/*  */}
          <Button variant="outlined" color='primary' onClick={handleClose}>
            LOG IN
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordModal);
