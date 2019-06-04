import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from "@material-ui/icons/Home";
import PriceChartIcon from "@material-ui/icons/ShowChart";
import PortfolioIcon from "@material-ui/icons/PieChart"
import SettingsIcon from "@material-ui/icons/Settings";

import { Link, Route, Switch } from "react-router-dom";
import Portfolio from "./Portfolio";
import PriceChart from "./PriceChart";
import Settings from "./Settings";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
		backgroundColor: 'rgba(0, 0, 0, 0.54)',
		boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
	},
	link: {
		color: 'initial',
		textDecoration: 'none',
	},
}));

function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Cryptocurrency Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
			<Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
				<Link to="/" className={classes.link}>
					<List>
						{['Home'].map((text) => (
							<ListItem button key={text}>
								<ListItemIcon><HomeIcon /></ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Link>
				<Link to="/price-chart" className={classes.link}>
					<List>
						{['Price'].map((text) => (
							<ListItem button key={text}>
								<ListItemIcon><PriceChartIcon /></ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Link>
				<Link to="/portfolio" className={classes.link}>
					<List>
						{['Portfolio'].map((text) => (
							<ListItem button key={text}>
								<ListItemIcon><PortfolioIcon /></ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Link>
        <Divider />
				<Link to="/settings" className={classes.link}>
					<List>
						{['Settings'].map((text) => (
							<ListItem button key={text}>
								<ListItemIcon><SettingsIcon /></ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Link>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
				<Switch>
					<Route path="/" exact />
					<Route path="/price-chart" component={PriceChart} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/settings" component={Settings} />
				</Switch>
      </main>
    </div>
  );
}

export default MiniDrawer;