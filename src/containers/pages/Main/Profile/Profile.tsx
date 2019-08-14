import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import './profile.css';

import FetchError from '../../../../shared/components/FetchError/FetchError';
import Loader from '../../../../shared/components/Loader/Loader';

import Button from '@material-ui/core/Button';
import { AppState } from '../../../../store';
import { profileRequestGetMe } from '../../../../store/profile-requests/selectors';
import { Actions } from '../../../../store/profile/actions';
import { getMe, getMeError } from '../../../../store/profile/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    requestGetMe: profileRequestGetMe(state),
    getMeData: getMe(state),
    getMeErrors: getMeError(state),
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMeAction: () => dispatch(Actions.getMe()),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const Profile: React.FC<Props> = ({ requestGetMe, getMeData, getMeAction, getMeErrors }) => {
  useEffect(() => {
    getMeAction();
  }, [ getMeAction ]);

  return (
    <main className='profile-page'>
      {/* Info block  */}
      {!requestGetMe.loaded && <span>no data</span>}
      {getMeErrors && <FetchError data={getMeErrors}/>}
      {requestGetMe.loading && <Loader/>}
      <h1>{getMeData && getMeData.me.profile.fullName}</h1>
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
