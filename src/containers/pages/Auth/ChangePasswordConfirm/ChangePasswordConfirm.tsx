import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router';

import Centred from '../../../../shared/components/Centred/Centred';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import ChangePasswordConfirmForm from '../../../forms/ChangePasswordConfirmForm/ChangePasswordConfirmForm';

import { getVerifyCode } from '../../../../store/verify-code/selectors';

import { getChangeConfirmPasswordState } from '../../../../store/password/selectors';
import { Actions } from '../../../../store/password';
import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getVerifyCode: getVerifyCode(state),
    getChangeConfirmPasswordState: getChangeConfirmPasswordState(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePasswordConfirm: () => dispatch(Actions.changePasswordConfirmAction.action())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ChangePasswordConfirm = (props: Props) => {
  const { changePasswordConfirm, getVerifyCode, getChangeConfirmPasswordState } = props;

  const isSaved = getChangeConfirmPasswordState
    && getChangeConfirmPasswordState.data
    && getChangeConfirmPasswordState.data.data
    && getChangeConfirmPasswordState.data.data.resetPasswordConfirm;

  const isLoading = getChangeConfirmPasswordState.loading;

  const handleOnSubmitConfirm = () => {
    changePasswordConfirm();
  };

  return (
    <Centred>
      {/* INFO BLOCK  */}
      {isSaved && <h3>password saved</h3>}
      {isLoading && <h3>password is saved</h3>}
      <WrappForm>
        <ChangePasswordConfirmForm onSubmit={handleOnSubmitConfirm}/>
      </WrappForm>
      {isSaved && <Redirect to='/'/>}
      {!getVerifyCode && <Redirect to='/'/>}
    </Centred>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordConfirm);
