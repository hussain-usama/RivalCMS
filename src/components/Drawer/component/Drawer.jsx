import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import styles from '../styles/Drawer.module.css';
import MenuBar from '../../MenuBar/component/MenuBar';
import { sideBarList } from './SideBarList';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function DashboardDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const navigate=useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar className='appBgColor aligned'>
            <label className={styles.DashobardHeader}>
                    <span className={styles.rivalHead}>Rival</span><span className={styles.cmsHead}>CMS</span>
            </label>  
      </Toolbar>
      <Divider />
      <List className={styles.listContainer}>
        {sideBarList.map((item, index) => (
          <ListItem key={item.text} >
            <ListItemButton className={styles.listItemContainer} onClick={()=>navigate(item?.route)}>
                {item.icon && <item.icon  className={styles.listIcons}/>}
              <label className={`${styles.ListItem} ${item?.listHead && styles.headColor} ${location?.pathname===item.route && styles.ListItemActive}` }>{item.text}</label>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },borderRight:'1px solid transparent'
        
        }}
      
      >
        <Toolbar className='appBgColor alignEnd'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, }}
          >
            <MenuIcon />
          </IconButton>
            <MenuBar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },borderRight:'1px solid transparent',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={{borderRight:'1px solid #2a4365'}}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,borderRight:'1px solid transparent', backgroundColor: '#edf2f7'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {props.component}
      </Box>
    </Box>
  );
}


export default DashboardDrawer;