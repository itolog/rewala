import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './resetPasswordConfirm.css';

import ResetPasswordConfirmCodeForm from '../../../forms/ResetPasswordConfirmCodeForm/ResetPasswordConfirmCodeForm';

import { Actions} from '../../../../store/password';
import { getResetPasswordConfirmState } from '../../../../store/password/selectors';
import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getResetPasswordConfirmState: getResetPasswordConfirmState(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPasswordConfirmCode: () => dispatch(Actions.resetPasswordConfirmCodeAction.action())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;


const ResetPasswordConfirm = (props: Props) => {
  const { resetPasswordConfirmCode, getResetPasswordConfirmState } = props;

  const handelOnsubmitResetConfirmCode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    resetPasswordConfirmCode();
  };

  return (
    <section className='confirm-code'>
      {/*  ERRORS*/}
      {getResetPasswordConfirmState && getResetPasswordConfirmState.data && getResetPasswordConfirmState.data.errors.map((item: any, index: number) => {
        return (
          <p key={index}>{item.message}</p>
        )
      })}
      <ResetPasswordConfirmCodeForm onSubmit={handelOnsubmitResetConfirmCode}/>
    </section>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordConfirm);
