import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import './profileSettings.css';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import FetchError from '../../../../shared/components/FetchError/FetchError';
import LogOut from '../../../../shared/components/LogOut/LogOut';
import UpdateMeForm from '../../../forms/UpdateMeForm/UpdateMeForm';
import ChangePasswordModal from '../../../modals/ChangePasswordModal/ChangePasswordModal';

import { UpdateUserInput } from '../../../../shared/generated/graphql';

import { AppState } from '../../../../store';
import { Actions } from '../../../../store/profile';
import { getUpdateMeData, getUpdateMeState } from '../../../../store/profile/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    getUpdateMe: getUpdateMeData(state),
    updateMeState: getUpdateMeState(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateMe: (payload: UpdateUserInput) => dispatch(Actions.updateMe.action(payload)),
  getMe: () => dispatch(Actions.getMe.action()),
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ProfileSettings = (props: Props) => {
  const { updateMe, getMe, getUpdateMe, updateMeState } = props;

  useEffect(() => {
    getMe();
  }, [ getMe ]);

  const updateMeHandler = (values: any) => {
    const payload = {
      email: values.email,
      profileInput: {
        fullName: values.fullName,
        notifications: values.notification,
        avatar: null,
      },
    };
    updateMe(payload);
  };

  return (
    <div className='paper'>
      <div className='paper-header'>
        <Link to='/profile/' style={{ width: '60px', height: '50px' }} aria-label='back'>
          <Fab variant='extended' aria-label='back'>
            <Icon>arrow_back</Icon>
          </Fab>
        </Link>

        <h2>Profile settings</h2>
      </div>
      <div className='paper-actions'>
        {/* INFO block*/}
        {updateMeState && updateMeState.loading && <div className='info-block'>saving</div>}

        <FetchError data={getUpdateMe}/>
        <UpdateMeForm onSubmit={updateMeHandler}/>

        <ChangePasswordModal/>
        <br/>
        <LogOut/>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
