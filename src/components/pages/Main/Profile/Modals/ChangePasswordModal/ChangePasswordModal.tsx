import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import gql from "graphql-tag";
import {Mutation} from "react-apollo";

import ChangePasswordForm from '../../ChangePasswordForm/ChangePasswordForm';
import AuthTokenService from '../../../../../../shared/services/authToken.service';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const CHANGE_PASSWORD = gql`
    mutation ChangePassword($changePass: ChangePasswordInput) {
        changePassword(input: $changePass) {
            authToken
        }
    }
`;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'column',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 4),
            outline: 'none',
        },
    }),
);

const ChangePasswordModal = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeSubmit = (changePassword: any, values: any) => {
        changePassword({
            variables: {
                "changePass": {
                    "oldPassword": values.oldPassword,
                    "newPassword": values.confirmPassword
                }
            }
        })
    };
    const changePasswordMutation = (data: any) => {
        AuthTokenService.setAuthToken(data.changePassword.authToken);
        handleClose();
    };

    return (
        <div>
            <Button variant='outlined' color='primary' onClick={handleOpen}>
                Change Password
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <section style={modalStyle} className={classes.paper}>
                    <h2 id="modal-title">Change Password</h2>
                    {/*  MUTATION   */}
                    <Mutation
                        mutation={CHANGE_PASSWORD}
                        onCompleted={(data: any) => changePasswordMutation(data)}
                    >
                        {(changePassword: any, {loading, error}: any) => (
                            <>
                                <ChangePasswordForm onSubmit={(values: any) => changeSubmit(changePassword, values)}/>
                                {loading && <p>password is changing ...</p>}
                                {error && <p>{error.toString()}</p>}
                            </>
                        )}
                    </Mutation>
                    {/*  MUTATION   */}
                </section>
            </Modal>
        </div>
    );
}

export default ChangePasswordModal;