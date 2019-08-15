import { makeStyles } from '@material-ui/styles';
import React from 'react';

import Centred from '../../../../shared/components/Centred/Centred';

const useStyles = makeStyles({
  mainСontainer: {
    backgroundШmage: 'linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.mainСontainer}>
      <Centred>
        <h1>Home</h1>
      </Centred>
    </main>
  );
};

export default Home;
