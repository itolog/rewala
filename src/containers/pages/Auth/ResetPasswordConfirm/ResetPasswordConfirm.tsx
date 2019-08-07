import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router';

import Centred from '../../../../shared/components/Centred/Centred';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import ResetPasswordConfirmCodeForm from '../../../forms/ResetPasswordConfirmCodeForm/ResetPasswordConfirmCodeForm';

import { Actions as VerifyCodeActions } from '../../../../store/verify-code/actions';

import { Actions } from '../../../../store/password';
import { getResetPasswordConfirmState } from '../../../../store/password/selectors';
import { AppState } from '../../../../store';

interface Values {
  confirmPasswordCode: string
}

const mapStateToProps = (state: AppState) => {
  return {
    getResetPasswordConfirmState: getResetPasswordConfirmState(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPasswordConfirmCode: () => dispatch(Actions.resetPasswordConfirmCodeAction.action()),
  setVerifyCode: (payload: string) => dispatch(VerifyCodeActions.requestVerifyCode(payload))
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ResetPasswordConfirm = (props: Props) => {
  const {
    resetPasswordConfirmCode,
    getResetPasswordConfirmState,
    setVerifyCode
  } = props;

  const isVerifyCodeValid = getResetPasswordConfirmState
    && getResetPasswordConfirmState.data
    && getResetPasswordConfirmState.data.data
    && getResetPasswordConfirmState.data.data.resetPasswordConfirmCode;

  const handelOnsubmitResetConfirmCode = (values: Values) => {
    const code = values && values.confirmPasswordCode;
    setVerifyCode(code);
    resetPasswordConfirmCode();
  };

  return (
    <Centred>
      {/*  ERRORS*/}
      {getResetPasswordConfirmState
      && getResetPasswordConfirmState.data
      && getResetPasswordConfirmState.data.errors
      && getResetPasswordConfirmState.data.errors.map((item: any, index: number) => {
        return (
          <p key={index}>{item.message}</p>
        )
      })}
      <WrappForm>
        <ResetPasswordConfirmCodeForm onSubmit={handelOnsubmitResetConfirmCode}/>
      </WrappForm>
      {isVerifyCodeValid && <Redirect to='/change-password-confirm/'/>}
    </Centred>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordConfirm);
