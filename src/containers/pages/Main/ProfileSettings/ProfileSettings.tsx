import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import './profileSettings.css';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import LogOut from '../../../../shared/components/LogOut/LogOut';

import { AppState } from '../../../../store';
import { Actions } from '../../../../store/profile/actions';

const mapStateToProps = (state: AppState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMe: () => dispatch(Actions.getMe()),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ProfileSettings = (props: Props) => {
  const {
    getMe,
  } = props;

  useEffect(() => {
    getMe();
  }, [ getMe ]);

  return (
    <div className='paper'>
      <div className='paper-header'>
        <Link to='/profile/' className='back-btn' aria-label='back'>
          <Fab variant='extended' aria-label='back'>
            <Icon>arrow_back</Icon>
          </Fab>
        </Link>

        <h2>Profile settings</h2>
      </div>
      <div className='paper-actions'>
        <LogOut/>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
