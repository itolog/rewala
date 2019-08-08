import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Centred from '../../../../shared/components/Centred/Centred';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import FetchError from '../../../../shared/components/FetchError/FetchError';

import {getConfigState , getConfigErrors} from '../../../../store/config-request/selectors';
import { Actions } from '../../../../store/config-request';
import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getConfigState: getConfigState(state),
    getConfigErrors: getConfigErrors(state)
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

  useEffect(() => {
    fetchConfig();
  }, []);

    return (
      <Centred>
          <WrappForm>
              <FetchError data={getConfigErrors} />
              <h2>registratO</h2>
          </WrappForm>
      </Centred>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
