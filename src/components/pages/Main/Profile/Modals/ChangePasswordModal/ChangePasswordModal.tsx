import React from 'react';
import { connect } from 'react-redux';
// UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { getPasswordState } from '../../../../../../store/password/selectors';

import ChangePasswordForm from '../../ChangePasswordForm/ChangePasswordForm';
import { Dispatch } from 'redux';

import { Actions } from '../../../../../../store/password';
import { AppState } from '../../../../../../store';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
      boxShadow: theme.shadows[ 5 ],
      padding: theme.spacing(2, 4, 4),
      outline: 'none',
    },
  }),
);


const mapStateToProps = (state: AppState) => {
  return {
    getPasswordState: getPasswordState(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePassword: () => dispatch(Actions.changePasswordAction.action())
});

type Props =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  ;

const ChangePasswordModal = (props: Props) => {
  const {
    changePassword,
    getPasswordState
  } = props;
  const classes = useStyles();
  const [ modalStyle ] = React.useState(getModalStyle);
  const [ open, setOpen ] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    changePassword();
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
          <ChangePasswordForm onSubmit={changeSubmit} loading={getPasswordState.loading}/>
          {/*  Errors  */}
          {getPasswordState && getPasswordState.data && getPasswordState.data.result && getPasswordState.data.result.errors.map((item: any, index: number) => {
            return (
              <p key={index}>{item.message}</p>
            )
          })}
          {getPasswordState && getPasswordState.data && getPasswordState.data && getPasswordState.data.errors && getPasswordState.data.errors.map((item: any, index: number) => {
            return (
              <p key={index}>{item.message}</p>
            )
          })}
        </section>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordModal);
