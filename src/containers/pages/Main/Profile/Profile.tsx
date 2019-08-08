import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";

import './profile.css';

import Loader from '../../../../shared/components/Loader/Loader';
import ProfileSettingsModal from '../../../modals/ProfileSettingsModal/ProfileSettingsModal';
import FetchError from '../../../../shared/components/FetchError/FetchError';

import { getMe, getMeError } from '../../../../store/profile/selectors';
import { Actions } from '../../../../store/profile';
import { AppState } from '../../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    getMeState: getMe(state),
    getMeError: getMeError(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMe: () => dispatch(Actions.getMe.action())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const Profile = (props: Props) => {
  const {
    getMeState,
    getMe,
    getMeError
  } = props;

  useEffect(() => {
    getMe();
  }, []);

  if (getMeError && getMeError.errors) {
    return (
      <div>
        <FetchError data={getMeError}></FetchError>
      </div>
    )
  } else {
    return (
      <main className='profile-page'>
        {getMeState.loading && <Loader />}
        <h1>{getMeState.data && getMeState.data.profile.fullName}</h1>
        <div className='profile-header'>
          <div className='profile-info'>
            <h2>Profile info</h2>

          </div>
          <ProfileSettingsModal/>
        </div>
      </main>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
