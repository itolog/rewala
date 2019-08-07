import React from 'react';

import './header.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <header className='header'>
      <Grid item>
        <ButtonGroup fullWidth aria-label="Header navigation" color="primary" variant="contained" size="large">
          <Button>
            <NavLink to='/' activeClassName='is-active'>Home</NavLink>
          </Button>
          <Button >
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
