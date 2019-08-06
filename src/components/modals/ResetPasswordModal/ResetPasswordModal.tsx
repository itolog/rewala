import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import './confirmCodeModal.css';

import { Actions } from '../../../store/password';
import ResetPasswordForm from '../../forms/ResetPasswordForm/ResetPasswordForm';


// const mapStateToProps = (state: AppState) => {
//   return {
//   };
// };

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPassword: () => dispatch(Actions.resetPasswordAction.action())
});

type Props =
  // & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;


const ResetPasswordModal = (props: Props) => {
  const { resetPassword } = props;

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
          {/* FORM */}
          <ResetPasswordForm onSubmit={handleOnSubmit} />
          {/*  */}
          <Button variant="outlined" color='primary' onClick={handleClose}>
            LOG IN
          </Button>
        </div>
      </Modal>
    </section>
  );
};

export default connect(null, mapDispatchToProps)(ResetPasswordModal);
