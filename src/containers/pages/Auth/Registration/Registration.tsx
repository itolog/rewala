import React, { useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Centred from '../../../../shared/components/Centred/Centred';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import FetchError from '../../../../shared/components/FetchError/FetchError';
import RegistrationForm from '../../../forms/RegistrationForm/RegistrationForm';

import { getConfigState, getConfigErrors } from '../../../../store/config-request/selectors';
import { Actions } from '../../../../store/config-request';
import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getConfigState: getConfigState(state),
    getConfigErrors: getConfigErrors(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchConfig: () => dispatch(Actions.getConfig.action())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

function Registration(props: Props) {
  const { getConfigState, fetchConfig, getConfigErrors } = props;

  const countries = getConfigState && getConfigState.data && getConfigState.data.config && getConfigState.data.config.countries;

  useEffect(() => {
    fetchConfig();

  }, []);


  const handleOnRegister = (values: any) => {
    const payload = {
      'email': values.email,
      'password': values.confirmPassword,
      'isAgreeWithPrivacyPolicyAndTermOfUse': values.police,
      'profileInput': {
        'fullName': values.fullname,
        'phone': `${values.code.value} ${values.phone_number}`
      }
    };
    console.log(payload)
  };


  return (
    <Centred>
      <WrappForm>
        <FetchError data={getConfigErrors}/>
        <RegistrationForm onSubmit={handleOnRegister} countries={countries} />
      </WrappForm>
    </Centred>

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
