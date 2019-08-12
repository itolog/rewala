import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { Link } from "react-router-dom";

import './profile.css';

import Loader from '../../../../shared/components/Loader/Loader';
import FetchError from '../../../../shared/components/FetchError/FetchError';

import { getMe, getMeError } from '../../../../store/profile/selectors';
import { Actions } from '../../../../store/profile';
import { AppState } from '../../../../store';
import Button from '@material-ui/core/Button';

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

  return (
    <main className='profile-page'>
      {/* Info block  */}
      {!getMeState.loaded && <span>no data</span>}
      {getMeError && <FetchError data={getMeError}/>}
      {getMeState.loading && <Loader/>}
      <h1>{getMeState.data && getMeState.data.me && getMeState.data.me.profile && getMeState.data.me.profile.fullName}</h1>
      <div className='profile-header'>
        <div className='profile-info'>
          <h2>Profile info</h2>
        </div>
        <Button variant="outlined" color="primary">
          <Link to='/settings/' style={{ color: 'blue' }}>Profile Settings</Link>
        </Button>
      </div>
    </main>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
