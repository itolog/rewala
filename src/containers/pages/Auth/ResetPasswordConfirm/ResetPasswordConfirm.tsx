import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ResetPasswordConfirmCodeForm from '../../../forms/ResetPasswordConfirmCodeForm/ResetPasswordConfirmCodeForm';

import { Actions} from '../../../../store/password';

// const mapStateToProps = (state: AppState) => {
//   return {
//     getMeState: getMe(state),
//     getMeError: getMeError(state)
//   };
// };
const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetPasswordConfirmCode: () => dispatch(Actions.resetPasswordConfirmCodeAction.action())
});

type Props =
  // & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;


const ResetPasswordConfirm = (props: Props) => {
  const { resetPasswordConfirmCode } = props;

  const handelOnsubmitResetConfirmCode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    resetPasswordConfirmCode();
  };

  return (
    <section>
      <ResetPasswordConfirmCodeForm onSubmit={handelOnsubmitResetConfirmCode}/>
    </section>
  )
};

export default connect(null, mapDispatchToProps)(ResetPasswordConfirm);
