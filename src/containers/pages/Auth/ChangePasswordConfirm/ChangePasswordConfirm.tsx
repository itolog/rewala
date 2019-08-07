import React from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import { Redirect } from 'react-router';

import Centred from '../../../../shared/components/Centred/Centred';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import ChangePasswordConfirmForm from '../../../forms/ChangePasswordConfirmForm/ChangePasswordConfirmForm';

import {getVerifyCode} from '../../../../store/verify-code/selectors';
import { Actions } from '../../../../store/password';
import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getVerifyCode: getVerifyCode(state)
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
  const { changePasswordConfirm, getVerifyCode } = props;

  const handleOnSubmitConfirm =() => {
    changePasswordConfirm();
  };

  return (
    <Centred>
      <WrappForm>
        <ChangePasswordConfirmForm onSubmit={handleOnSubmitConfirm} />
      </WrappForm>
      {!getVerifyCode && <Redirect to='/' />}
    </Centred>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordConfirm);
