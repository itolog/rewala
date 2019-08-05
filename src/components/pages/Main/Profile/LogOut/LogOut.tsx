import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { Dispatch } from 'redux';

import { Actions } from '../../../../../store/auth/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logOut: () => dispatch(Actions.logOut())
});

type Props =
  & ReturnType<typeof mapDispatchToProps>
  ;


const LogOut = (props: Props) => {
  const { logOut } = props;
  const logOutHandler = () => {
    logOut();
  }
  return (
    <>
      <Button variant="outlined" color="secondary" onClick={logOutHandler}>
        Log Out
      </Button>
    </>
  )
};

export default connect(null, mapDispatchToProps)(LogOut);
