import React, {useState} from 'react';
import {connect} from 'react-redux';

import {Query} from "react-apollo";
import gql from 'graphql-tag';

import {Actions} from '../../../../store/profile/actions';

import './profile.css';

import ProfileSettingsModal from './Modals/ProfileSettingsModal/ProfileSettingsModal';
import {Dispatch} from "redux";
import {getMe} from '../../../../store/profile/selectors';
import {AppState} from '../../../../store';

const GET_ME = gql`
    query persons {
        me{
            email
            profile {
                fullName
                notifications
            }
        }
    }
`;

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
        <Query
            query={GET_ME}
            onError={(error: Error) => setReqError(error.message)}
            onCompleted={(data: any) => props.getMe(data)}
        >
            {({loading}: any) => {
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
        </Query>

    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);