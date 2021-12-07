import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },


  },
  toolbar: {
    ...theme.mixins.toolbar,
    backgroundColor: 'rgb(30 38 41)',
    zIndex: 0
  },
  drawerPaper: {
    width: drawerWidth,
  }

}));

const ResponsiveDrawer = (props) => {

  const classes = useStyles();
  const lista = (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button component={Link} to="/confess">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Confesiones" />
      </ListItem>
      <ListItem button component={Link} to="/confesarme">
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Confesarme" />
      </ListItem>
    </List>
  )

  return (
    <>
      <nav className={classes.drawer} aria-label="">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={props.open}
            onClose={props.onClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClick={props.onClick}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
              <div className={classes.toolbar} />
              {lista}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div className={classes.toolbar} />
            {lista}
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
}

export default ResponsiveDrawer
