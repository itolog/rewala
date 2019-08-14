import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import Button from '@material-ui/core/Button';
import './auth.css';

import Centred from '../../../../shared/components/Centred/Centred';
import FetchError from '../../../../shared/components/FetchError/FetchError';
import { loginRequestData, loginRequestState } from '../../../../store/auth-request/selectors';

// STORE
import { AppState } from '../../../../store';
import { Actions } from '../../../../store/auth/actions';

import { LoginInput } from '../../../../shared/generated/graphql';
import LoginForm from './LoginForm/LoginForm';

// STORE PROPS
const mapStateToProps = (state: AppState) => {
  return {
    authLoginRequestState: loginRequestState(state),
    authLoginRequestData: loginRequestData(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (payload: LoginInput) => dispatch(Actions.logIn(payload)),
});

type Props =
  & ReturnType<typeof mapDispatchToProps>
  & ReturnType<typeof mapStateToProps>
  ;

export const Auth: React.FC<Props> = ({ login, authLoginRequestData, authLoginRequestState }) => {

  const loginSubmit = (values: LoginInput) => {
    login(values);
  };

  return (
    <main className='auth-main'>
      <Centred>
        <h1>Rewala</h1>
        <br/>
        {/* INFO BLOCK */}
        {authLoginRequestState && authLoginRequestState.loading && <div>loading</div>}
        <FetchError data={authLoginRequestData}/>
        <LoginForm
          onSubmit={loginSubmit}
        />

        <Button variant='outlined' size='small' color='primary'>
          <Link to='/reset-password/' style={{ color: '#578824' }}>reset password</Link>
        </Button>

        <Button variant='outlined' size='small' color='default'>
          <Link to='/registration/' style={{ color: 'blue' }}>sign up</Link>
        </Button>
      </Centred>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
