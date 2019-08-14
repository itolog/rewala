import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Dispatch } from 'redux';

import './resetPasswordConfirm.css';

import Centred from '../../../../shared/components/Centred/Centred';
import FetchError from '../../../../shared/components/FetchError/FetchError';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import ResetPasswordConfirmCodeForm from './ResetPasswordConfirmCodeForm/ResetPasswordConfirmCodeForm';

import { Actions as VerifyCodeActions } from '../../../../store/verify-code/actions';

import { AppState } from '../../../../store';
import { Actions } from '../../../../store/password';
import { getResetPasswordConfirmState, resetPasswordConfirmCodeErrors } from '../../../../store/password/selectors';

interface Values {
  confirmPasswordCode: string;
}

const mapStateToProps = (state: AppState) => {
  return {
    getResetPasswordConfirm: getResetPasswordConfirmState(state),
    resetPasswordConfirmCodeError: resetPasswordConfirmCodeErrors(state),
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPasswordConfirmCode: () => dispatch(Actions.resetPasswordConfirmCodeAction.action()),
  setVerifyCode: (payload: string) => dispatch(VerifyCodeActions.requestVerifyCode(payload)),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ResetPasswordConfirm = (props: Props) => {
  const {
    resetPasswordConfirmCode,
    getResetPasswordConfirm,
    setVerifyCode,
    resetPasswordConfirmCodeError,
  } = props;

  const isVerifyCodeValid = getResetPasswordConfirmState
    && getResetPasswordConfirm.data
    && getResetPasswordConfirm.data.data
    && getResetPasswordConfirm.data.data.resetPasswordConfirmCode;

  const handelOnsubmitResetConfirmCode = (values: Values) => {
    const code = values && values.confirmPasswordCode;
    setVerifyCode(code);
    resetPasswordConfirmCode();
  };

  return (
    <main className='reset-confirm-container'>
      <Centred>
        {/*  ERRORS*/}
        {resetPasswordConfirmCodeError && <FetchError data={resetPasswordConfirmCodeError}/>}

        <WrappForm>
          <ResetPasswordConfirmCodeForm onSubmit={handelOnsubmitResetConfirmCode}/>
        </WrappForm>
        {isVerifyCodeValid && <Redirect to='/change-password-confirm/'/>}
      </Centred>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordConfirm);
