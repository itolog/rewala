import React from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from '@material-ui/core/Button';

import './resetPassword.css';

import { Actions } from '../../../../store/password';
import { getResetPasswordState } from '../../../../store/password/selectors';

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

  const handleOnSubmitReset = (e: React.SyntheticEvent) => {
    e.preventDefault();
    resetPassword();
  };

  return (
    <section>
      <div className='confirm-code'>
        <h2>Rewala</h2>
        {/*  INFO BLOCK */}
        {getResetPasswordState && getResetPasswordState.loading && <span>sending code to email</span>}
        {/*  ERRORS  */}
        {getResetPasswordState && getResetPasswordState.data && getResetPasswordState.data.errors && getResetPasswordState.data.errors.map((item: any, index: number) => {
          return (
            <p key={index}>{item.message}</p>
          )
        })}
        {/* FORM Reset */}
        <ResetPasswordForm onSubmit={handleOnSubmitReset}/>

        <Button variant="outlined" color='primary'>
          <Link to="/"> LOG IN</Link>
        </Button>

      {/*  REdirect to Confirm PAssword PAge*/}

      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
