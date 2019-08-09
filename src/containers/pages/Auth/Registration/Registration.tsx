import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Centred from '../../../../shared/components/Centred/Centred';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import FetchError from '../../../../shared/components/FetchError/FetchError';
import RegistrationForm from '../../../forms/RegistrationForm/RegistrationForm';
import { UserInput } from '../../../../shared/generated/graphql';

import { Actions as RegistrationAction } from '../../../../store/registration';

import { getRegistrationFetchErrors } from '../../../../store/registration/selectors';
import { getConfigState, getConfigErrors } from '../../../../store/config-request/selectors';
import { Actions } from '../../../../store/config-request';
import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getConfigState: getConfigState(state),
    getConfigErrors: getConfigErrors(state),
    getRegistrationFetchErrors: getRegistrationFetchErrors(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchConfig: () => dispatch(Actions.getConfig.action()),
  registration: (payload: UserInput) => dispatch(RegistrationAction.registration.action(payload))
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

function Registration(props: Props) {
  const { getConfigState, fetchConfig, getConfigErrors, registration, getRegistrationFetchErrors } = props;

  const countries = getConfigState && getConfigState.data && getConfigState.data.config && getConfigState.data.config.countries;

  useEffect(() => {
    fetchConfig();

  }, []);


  const handleOnRegister = (values: any) => {
    const payload = {
      'email': values.email,
      'password': values.confirmPassword,
      'isAgreeWithPrivacyPolicyAndTermOfUse': values.police || false,
      'profileInput': {
        'fullName': values.fullname || null,
        'phone': values.phone_number && values.code && `${values.code.value} ${values.phone_number}`
      }
    };
    registration(payload);
  };


  return (
    <Centred>
      <WrappForm>
        <FetchError data={getConfigErrors}/>
        <FetchError data={getRegistrationFetchErrors} />
        <RegistrationForm onSubmit={handleOnRegister} countries={countries}/>
      </WrappForm>
    </Centred>

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
