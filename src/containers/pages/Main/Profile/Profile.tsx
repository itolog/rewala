import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import FetchError from '../../../../shared/components/FetchError/FetchError';
import Loader from '../../../../shared/components/Loader/Loader';

import Button from '@material-ui/core/Button';
import { AppState } from '../../../../store';
import { profileRequestGetMe } from '../../../../store/profile-requests/selectors';
import { Actions } from '../../../../store/profile/actions';
import { getMe, getMeError } from '../../../../store/profile/selectors';

const useStyles = makeStyles({
  profilePage: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    minHeight: '95%',
    backgroundImage: 'linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%)',
  },
  profileHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
});

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
  const classes = useStyles();
  useEffect(() => {
    getMeAction();
  }, [ getMeAction ]);

  return (
    <main className={classes.profilePage}>
      {/* Info block  */}
      {getMeErrors && <FetchError data={getMeErrors}/>}
      {requestGetMe.loading && <Loader/>}
      <h1>{getMeData && getMeData.me.profile.fullName}</h1>
      <div className={classes.profileHeader}>
        <h2>Profile info</h2>
        <Button variant='outlined' color='primary'>
          <Link to='/settings/' style={{ color: 'blue' }}>Profile Settings</Link>
        </Button>
      </div>
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
