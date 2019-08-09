import React from 'react';
import { Link } from "react-router-dom";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import './auth.css';
import Button from '@material-ui/core/Button';

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

        <main className='auth-main'>
          <Centred>
          <h1>Rewala</h1>
          <br/>
          {getAuthState.error && <h2>{getAuthState.error}</h2>}
          <LoginForm
            onSubmit={loginSubmit}
          />

          <Button variant="outlined" size="small" color="primary">
            <Link to="/reset-password/" style={{ color: '#578824' }}>reset password</Link>
          </Button>

          <Button variant="outlined" size="small" color="default">
            <Link to="/registration/" style={{ color: 'orange' }}>sign up</Link>
          </Button>
          </Centred>
        </main>

  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
