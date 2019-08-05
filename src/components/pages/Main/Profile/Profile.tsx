import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './profile.css';

import ProfileSettingsModal from './Modals/ProfileSettingsModal/ProfileSettingsModal';
import {Dispatch} from "redux";
import {getMe} from '../../../../store/profile/selectors';
import {Actions} from '../../../../store/profile';
import {AppState} from '../../../../store';

const mapStateToProps = (state: AppState) => {
    return {
        getMeState: getMe(state),
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
    const {getMeState} = props;
    useEffect(() => {
        props.getMe();
    }, []);

    return (
        <main className='profile-page'>
            <h1>{getMeState.data && getMeState.data.profile.fullName}</h1>
            <div className='profile-header'>
                <div className='profile-info'>
                    <h2>Profile infoo</h2>
                </div>
                <ProfileSettingsModal/>
            </div>
        </main>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);