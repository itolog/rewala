import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

import { colors } from '../../../../shared/variebles/colors';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import LogOut from './LogOut/LogOut';

import { Actions } from '../../../../store/profile/actions';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    flexFlow: 'column',
    position: 'relative',
    width: '100%',
    minHeight: '95%',
    outline: 'none',
    background: colors.paperProfileSetings,
  },
  profileHeader: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexBasis: '80px',
    background: colors.profileHeader,
  },
  paperActions: {
    display: 'flex',
    flex: '1 1',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMe: () => dispatch(Actions.getMe()),
});

type Props =
  & ReturnType<typeof mapDispatchToProps>
  ;

const ProfileSettings: React.FC<Props> = ({ getMe }) => {
  const classes = useStyles();
  useEffect(() => {
    getMe();
  }, [ getMe ]);

  return (
    <div className={classes.paper}>
      <div className={classes.profileHeader}>
        <Grid item={true} xs={3}>
          <Link to='/profile/' className='back-btn' aria-label='back'>
            <Fab variant='extended' aria-label='back'>
              <Icon>arrow_back</Icon>
            </Fab>
          </Link>
        </Grid>

        <Grid item={true} xs={5}>
          <h2>Profile settings</h2>
        </Grid>

      </div>
      <div className={classes.paperActions}>
        <LogOut/>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ProfileSettings);
