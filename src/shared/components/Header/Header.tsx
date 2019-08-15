import React from 'react';

import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import { colors } from '../../variebles/colors';

const useStyles = makeStyles({
  header: {
    'background': colors.headerBg,
    '& a': {
      color: colors.linkHeader,
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Grid item={true}>
        <ButtonGroup fullWidth={true} aria-label='Header navigation' color='primary' variant='contained' size='large'>
          <Button>
            <NavLink to='/' activeClassName='is-active'>Home</NavLink>
          </Button>
          <Button>
            <NavLink to='/search/' activeClassName='is-active'>Search</NavLink>
          </Button>
          <Button>
            <NavLink to='/profile/' activeClassName='is-active'>
              Profile
            </NavLink>
          </Button>
        </ButtonGroup>
      </Grid>
    </header>
  );
};

export default Header;
