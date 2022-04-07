/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Container, Typography, Button} from '@mui/material';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Bulletin-app
          </Typography>
          <Button className={styles.notLogged} variant="outlined">Log in</Button>
          <Button className={styles.isLogged} variant="outlined">Your posts</Button>
          <Button className={styles.isLogged} variant="outlined">Log out</Button>
        </Toolbar>
      </Container>
    </AppBar>  
  
  </div> 
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
