import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AddSettings from './settings/field'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#000'
    }
  },
  typography: {
    fontFamily: [
      'Quicksand', 'sans-serif'
    ].join(','),
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    //minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color='secondary'>
          <Toolbar className={classes.toolbar} variant='dense'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography  className={classes.title} variant="h6" noWrap>
              Permit System
          </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <Switch>
            <Route exact path='/addSettings' component={AddSettings} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}