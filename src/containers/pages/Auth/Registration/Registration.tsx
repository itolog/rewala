import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './registration.css';

import Centred from '../../../../shared/components/Centred/Centred';
import FetchError from '../../../../shared/components/FetchError/FetchError';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import { UserInput } from '../../../../shared/generated/graphql';
import RegistrationForm from '../../../forms/RegistrationForm/RegistrationForm';

import { Actions as RegistrationAction } from '../../../../store/registration';

import { AppState } from '../../../../store';
import { Actions } from '../../../../store/config-request';
import { getConfigErrors, getConfigState } from '../../../../store/config-request/selectors';
import { getRegistrationState, registrationFetchErrors } from '../../../../store/registration/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    getConfig: getConfigState(state),
    getConfigError: getConfigErrors(state),
    getRegistration: getRegistrationState(state),
    getRegistrationFetchErrors: registrationFetchErrors(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchConfig: () => dispatch(Actions.getConfig.action()),
  registration: (payload: UserInput) => dispatch(RegistrationAction.registration.action(payload)),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

function Registration(props: Props) {
  const {
    getConfig,
    fetchConfig,
    getConfigError,
    registration,
    getRegistration,
    getRegistrationFetchErrors,
  } = props;

  const countries = getConfig && getConfig.data && getConfig.data.config && getConfig.data.config.countries;
  const isRegistration = getRegistration.data
    && getRegistration.data.data
    && getRegistration.data.data.registration;

  useEffect(() => {
    fetchConfig();
  }, [ fetchConfig ]);

  const handleOnRegister = (values: any) => {
    const payload = {
      email: values.email,
      password: values.confirmPassword,
      isAgreeWithPrivacyPolicyAndTermOfUse: values.police || false,
      profileInput: {
        fullName: values.fullname || null,
        phone: values.phone_number || null,
        countryCode: (values.code && values.code.value) || null,
      },
    };
    registration(payload);
  };

  return (
    <main className='registration-container'>
      <Centred>
        {/* INFO  BLOCK*/}
        {getRegistration && getRegistration.loading &&
        <div className='info-block'>sending registration query</div>}
        {isRegistration && getRegistration.loaded && <div className='success-block'>your profile registred</div>}
        <WrappForm>
          <FetchError data={getConfigError}/>
          <FetchError data={getRegistrationFetchErrors}/>
          <RegistrationForm onSubmit={handleOnRegister} countries={countries}/>
        </WrappForm>
      </Centred>
    </main>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
