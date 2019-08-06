import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Badge from '@material-ui/core/Badge';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1)
    },
    padding: {
      padding: theme.spacing(0, 1)
    }
  })
);

function Header() {
  return (
    <header className='header'>
      <Grid item>
        <ButtonGroup fullWidth aria-label="Header navigation" color="primary" variant="contained" size="large">
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
}

export default Header;
