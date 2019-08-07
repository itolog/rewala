import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from "react-router";

import Button from '@material-ui/core/Button';
import { Dispatch } from 'redux';

import { Actions } from '../../../store/auth/actions';
const mapDispatchToProps = (dispatch: Dispatch) => ({
  logOut: () => dispatch(Actions.logOut())
});

type Props =
  & ReturnType<typeof mapDispatchToProps>
  & RouteComponentProps
  ;

const LogOut = (props: Props) => {
  const { logOut, history } = props;

  const logOutHandler = () => {
    history.push('/');
    logOut();
  };

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={logOutHandler}>
        Log Out
      </Button>
    </>
  )
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(LogOut) as React.FunctionComponent
