import React, {useState} from 'react';
import {connect} from 'react-redux';

import {Actions} from '../../../../store/profile/actions';

import './profile.css';

import ProfileSettingsModal from './Modals/ProfileSettingsModal/ProfileSettingsModal';
import {Dispatch} from "redux";
import {getMe} from '../../../../store/profile/selectors';
import {AppState} from '../../../../store';
import {PersonsComponent} from "../../../../gen/graphql";

const mapStateToProps = (state: AppState) => {
    return {
        getMeState: getMe(state),
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getMe: (payload: any) => dispatch(Actions.getMe(payload))
});

type Props =
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>
    ;

const Profile = (props: Props) => {
    const [reqError, setReqError] = useState('');
    const {getMeState} = props;

    return (
        <PersonsComponent
            onError={(error) => setReqError(error.message)}
            onCompleted={(data) => props.getMe(data)}
        >
            {({loading}) => {
                if (loading) return "Loading...";
                if (reqError) return `Error! ${reqError}`;
                return (
                    <main className='profile-page'>
                        <h1>{getMeState.profile.fullName}</h1>
                        <div className='profile-header'>
                            <div className='profile-info'>
                                <h2>Profile info</h2>
                            </div>
                            <ProfileSettingsModal/>
                        </div>

                    </main>
                );
            }}
        </PersonsComponent>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);