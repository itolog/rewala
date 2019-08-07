import React from 'react';
import { Redirect } from 'react-router'

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './resetPassword.css';

import { Actions } from '../../../../store/password';
import { getResetPasswordState } from '../../../../store/password/selectors';

import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import Centred from '../../../../shared/components/Centred/Centred';
import ResetPasswordForm from '../../../forms/ResetPasswordForm/ResetPasswordForm';

import { AppState } from '../../../../store';

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


const ResetPassword = (props: Props) => {
  const { resetPassword, getResetPasswordState } = props;
  const isSendEmail = getResetPasswordState.data
    && getResetPasswordState.data.data
    && getResetPasswordState.data.data.resetPassword;

  const handleOnSubmitReset = () => {
    resetPassword();
  };

  return (
    <Centred>
      {/*<div className='confirm-code'>*/}
        {/*  INFO BLOCK */}
        {getResetPasswordState && getResetPasswordState.loading && <span>sending code to email</span>}
        {/*  ERRORS  */}
        {getResetPasswordState && getResetPasswordState.data && getResetPasswordState.data.errors && getResetPasswordState.data.errors.map((item: any, index: number) => {
          return (
            <p key={index}>{item.message}</p>
          )
        })}
        {/* FORM Reset */}
        <WrappForm>
          <ResetPasswordForm onSubmit={handleOnSubmitReset}/>
        </WrappForm>
        {/*  REdirect to Confirm PAssword PAge*/}
        {isSendEmail && <Redirect to='/reset-password-confirm/'/>}
      {/*</div>*/}
    </Centred>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
