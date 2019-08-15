import { makeStyles } from '@material-ui/styles';
import React from 'react';

import Centred from '../../../../shared/components/Centred/Centred';

const useStyles = makeStyles({
  searchContainer: {
    minHeight: '100%',
    backgroundImage: 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)',
  },
});

function Search() {
  const classes = useStyles();
  return (
    <main className={classes.searchContainer}>
      <Centred>
        <h1>Search</h1>
      </Centred>
    </main>
  );
}

export default Search;
