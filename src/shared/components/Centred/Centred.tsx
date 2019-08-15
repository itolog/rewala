import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    outline: 'none',
    justifyContent: 'space-around',
  },
});

interface Props {
  children: React.ReactNode;
}

const Centred: React.FC<Props> = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Centred;
