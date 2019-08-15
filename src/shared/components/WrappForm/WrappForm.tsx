import React from 'react';

import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles({
  wrappForm: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const WrappForm: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <section className={classes.wrappForm}>
      <h1>Rewala</h1>
      <div className='wrapp-form--children'>
        {children}
      </div>
      <Button variant='outlined' color='primary'>
        <Link to='/' style={{ color: 'blue' }}> LOG IN</Link>
      </Button>
    </section>
  );
};

export default WrappForm;
