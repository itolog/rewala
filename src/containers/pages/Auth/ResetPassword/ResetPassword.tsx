import React from 'react';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './resetPassword.css';

import { Actions } from '../../../../store/password';
import { getResetPasswordState, resetPasswordErrors } from '../../../../store/password/selectors';

import Centred from '../../../../shared/components/Centred/Centred';
import FetchError from '../../../../shared/components/FetchError/FetchError';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import ResetPasswordForm from './ResetPasswordForm/ResetPasswordForm';

import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getResetPassword: getResetPasswordState(state),
    resetPasswordError: resetPasswordErrors(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPassword: () => dispatch(Actions.resetPasswordAction.action()),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ResetPassword = (props: Props) => {
  const { resetPassword, getResetPassword, resetPasswordError } = props;
  const isSendEmail = getResetPassword.data
    && getResetPassword.data.data
    && getResetPassword.data.data.resetPassword;

  const handleOnSubmitReset = () => {
    resetPassword();
  };

  return (
    <main className='reset-container'>
      <Centred>
        {/*  INFO BLOCK */}
        {getResetPassword && getResetPassword.loading &&
        <div className='info-block'>sending code to email</div>}
        {/*  ERRORS  */}
        <FetchError data={resetPasswordError}/>
        {/* FORM Reset */}
        <WrappForm>
          <ResetPasswordForm onSubmit={handleOnSubmitReset}/>
        </WrappForm>
        {/*  REdirect to Confirm PAssword PAge*/}
        {isSendEmail && <Redirect to='/reset-password-confirm/'/>}
      </Centred>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
