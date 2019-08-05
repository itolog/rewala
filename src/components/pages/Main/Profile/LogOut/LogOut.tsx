import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { Dispatch } from 'redux';

import { Actions } from '../../../../../store/auth/actions';
import { getAuthState } from '../../../../../store/auth/selectors';
import { AppState } from '../../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getAuthState: getAuthState(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logOut: () => dispatch(Actions.logOut())
});

type Props =
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>
  ;

const LogOut = (props: Props) => {
  const { logOut, getAuthState } = props;

  const logOutHandler = () => {
    logOut();
  };

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={logOutHandler}>
        Log Out
      </Button>
      {getAuthState.error && <h3>{getAuthState.error}</h3>}
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
