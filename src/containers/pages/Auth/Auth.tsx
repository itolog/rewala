import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Centred from '../../../shared/components/Centred/Centred';

// STORE
import { AppState } from '../../../store';
import { Actions } from '../../../store/auth/actions';
import { getAuthState } from '../../../store/auth/selectors';

import { LoginInput } from '../../../shared/generated/graphql';
import LoginForm from '../../forms/LoginForm/LoginForm';

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    getAuthState: getAuthState(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (payload: LoginInput) => dispatch(Actions.logIn(payload))
});

type Props =
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>
  ;

export const Auth = (props: Props) => {
  const { login, getAuthState } = props;

  const loginSubmit = (values: LoginInput) => {
    login(values);
  };

  return (
    <Centred>
      <h1>Rewala YoYo</h1>
      <br/>
      {getAuthState.error && <h2>{getAuthState.error}</h2>}
      <LoginForm
        onSubmit={(values) => loginSubmit(values)}
      />
      <Button size="medium" >
         <Link to="/reset-password/">reset password</Link>
      </Button>
    </Centred>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
