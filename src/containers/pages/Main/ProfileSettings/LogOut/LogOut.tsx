import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';

import Button from '@material-ui/core/Button';
import { Dispatch } from 'redux';

import { Actions } from '../../../../../store/auth/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logOut: () => dispatch(Actions.logOut()),
});

type Props =
  & ReturnType<typeof mapDispatchToProps>
  & RouteComponentProps
  ;

const LogOut: React.FC<Props> = ({ logOut, history }) => {
  const logOutHandler = () => {
    logOut();
    history.push('/');
  };

  return (
    <Button variant='outlined' color='secondary' onClick={logOutHandler}>
      Log Out
    </Button>
  );
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(LogOut) as React.FC;
