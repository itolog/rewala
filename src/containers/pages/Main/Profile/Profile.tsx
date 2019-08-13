import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import './profile.css';

import FetchError from '../../../../shared/components/FetchError/FetchError';
import Loader from '../../../../shared/components/Loader/Loader';

import Button from '@material-ui/core/Button';
import { AppState } from '../../../../store';
import { Actions } from '../../../../store/profile';
import { getMe, getMeError } from '../../../../store/profile/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    getMeData: getMe(state),
    getMeErrors: getMeError(state),
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMeAction: () => dispatch(Actions.getMe.action()),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const Profile = (props: Props) => {
  const {
    getMeData,
    getMeAction,
    getMeErrors,
  } = props;

  useEffect(() => {
    getMeAction();
  }, [ getMeAction ]);

  return (
    <main className='profile-page'>
      {/* Info block  */}
      {!getMeData.loaded && <span>no data</span>}
      {getMeErrors && <FetchError data={getMeErrors}/>}
      {getMeData.loading && <Loader/>}
      <h1>{getMeData.data && getMeData.data.me && getMeData.data.me.profile && getMeData.data.me.profile.fullName}</h1>
      <div className='profile-header'>
        <div className='profile-info'>
          <h2>Profile info</h2>
        </div>
        <Button variant='outlined' color='primary'>
          <Link to='/settings/' style={{ color: 'blue' }}>Profile Settings</Link>
        </Button>
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
