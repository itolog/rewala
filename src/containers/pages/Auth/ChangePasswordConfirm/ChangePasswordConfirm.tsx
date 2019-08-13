import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Dispatch } from 'redux';

import './changePasswordConfirm.css';

import Centred from '../../../../shared/components/Centred/Centred';
import FetchError from '../../../../shared/components/FetchError/FetchError';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';

import ChangePasswordConfirmForm from '../../../forms/ChangePasswordConfirmForm/ChangePasswordConfirmForm';

import { getVerifyCode } from '../../../../store/verify-code/selectors';

import { AppState } from '../../../../store';
import { Actions } from '../../../../store/password';
import { changeConfirmPassworErrors, getChangeConfirmPasswordState } from '../../../../store/password/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    getVerify: getVerifyCode(state),
    getChangeConfirmPassword: getChangeConfirmPasswordState(state),
    changeConfirmPassworError: changeConfirmPassworErrors(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePasswordConfirm: () => dispatch(Actions.changePasswordConfirmAction.action()),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ChangePasswordConfirm = (props: Props) => {
  const {
    changePasswordConfirm,
    getVerify,
    getChangeConfirmPassword,
    changeConfirmPassworError,
  } = props;

  const isSaved = getChangeConfirmPasswordState
    && getChangeConfirmPassword.data
    && getChangeConfirmPassword.data.data
    && getChangeConfirmPassword.data.data.resetPasswordConfirm;

  const isLoading = getChangeConfirmPassword.loading;

  const handleOnSubmitConfirm = () => {
    changePasswordConfirm();
  };

  return (
    <main className='change-password-confirm-container'>
      <Centred>
        {/* INFO BLOCK  */}
        {isSaved && <h3 className='info-block'>password saved</h3>}
        {isLoading && <h3 className='success-block'>password is saved</h3>}
        {/* Error Block  */}
        {changeConfirmPassworError && <FetchError data={changeConfirmPassworError}/>}
        <WrappForm>
          <ChangePasswordConfirmForm onSubmit={handleOnSubmitConfirm}/>
        </WrappForm>
        {isSaved && <Redirect to='/'/>}
        {!getVerify && <Redirect to='/'/>}
      </Centred>
    </main>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordConfirm);
