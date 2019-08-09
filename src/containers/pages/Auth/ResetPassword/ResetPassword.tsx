import React from 'react';
import { Redirect } from 'react-router'

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './resetPassword.css';

import { Actions } from '../../../../store/password';
import { getResetPasswordState, resetPasswordErrors } from '../../../../store/password/selectors';

import FetchError from '../../../../shared/components/FetchError/FetchError';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import Centred from '../../../../shared/components/Centred/Centred';
import ResetPasswordForm from '../../../forms/ResetPasswordForm/ResetPasswordForm';

import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getResetPasswordState: getResetPasswordState(state),
    resetPasswordErrors: resetPasswordErrors(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPassword: () => dispatch(Actions.resetPasswordAction.action())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;


const ResetPassword = (props: Props) => {
  const { resetPassword, getResetPasswordState, resetPasswordErrors } = props;
  const isSendEmail = getResetPasswordState.data
    && getResetPasswordState.data.data
    && getResetPasswordState.data.data.resetPassword;

  const handleOnSubmitReset = () => {
    resetPassword();
  };

  return (
    <main className='reset-container'>
        <Centred>
          {/*  INFO BLOCK */}
          {getResetPasswordState && getResetPasswordState.loading &&
          <div className='info-block'>sending code to email</div>}
          {/*  ERRORS  */}
            <FetchError data={resetPasswordErrors}/>
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
