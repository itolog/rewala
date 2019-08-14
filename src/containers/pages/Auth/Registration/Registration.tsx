import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import './registration.css';

import Centred from '../../../../shared/components/Centred/Centred';
import FetchError from '../../../../shared/components/FetchError/FetchError';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import { UserInput } from '../../../../shared/generated/graphql';
import RegistrationForm from './RegistrationForm/RegistrationForm';

import { Actions as RegistrationAction } from '../../../../store/auth/actions';

import { AppState } from '../../../../store';
import { registrationFetchData, registrationFetchErrors, registrationRequestState } from '../../../../store/auth-requests/selectors';
import { Actions } from '../../../../store/config-request';
import { getConfigData, getConfigErrors } from '../../../../store/config-request/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    getConfigError: getConfigErrors(state),
    configData: getConfigData(state),
    registrationRequestData: registrationFetchData(state),
    getRegistration: registrationRequestState(state),
    getRegistrationFetchErrors: registrationFetchErrors(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchConfig: () => dispatch(Actions.getConfig.action()),
  registration: (payload: UserInput) => dispatch(RegistrationAction.registration(payload)),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const Registration: React.FC<Props> = ({
                                         fetchConfig,
                                         getConfigError,
                                         registration,
                                         getRegistration,
                                         getRegistrationFetchErrors,
                                         registrationRequestData,
                                         configData,
                                       }) => {

  const countries = configData && configData.config.countries;
  const isRegistration = registrationRequestData && registrationRequestData.registration;

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
        {/* Errors */}
        <FetchError data={getConfigError}/>
        <FetchError data={getRegistrationFetchErrors}/>
        {isRegistration && getRegistration.loaded && <div className='success-block'>your profile registred</div>}
        <WrappForm>
          <RegistrationForm onSubmit={handleOnRegister} countries={countries}/>
        </WrappForm>
      </Centred>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
