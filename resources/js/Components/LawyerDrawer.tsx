import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from '@inertiajs/react';
import ArchiveIcon from '@mui/icons-material/Archive';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function LawyerDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List >
      <ListItem className='mt-5 py-2' key={"الصفحة الرئيسية"} disablePadding>
  <ListItemButton>
  <ListItemIcon>
      <HomeIcon style={{ color: "#34d399" }} />
      </ListItemIcon>
      <Link style={{ color: "#334155" }}  href='/home'>الصفحة الرئيسية</Link>
  </ListItemButton>
</ListItem>


         <ListItem className=' py-2' key={" الموكلين"} disablePadding>
         <ListItemButton>
              <ListItemIcon>
                  <PeopleAltIcon style={{color : "#34d399"}}/>
              </ListItemIcon>
              {/* <ListItemText style={{ color: "#334155" }} primary={" الموكلين"} /> */}
              <Link style={{ color: "#334155" }}  href='/clients'>الموكلين</Link>
            </ListItemButton>
         </ListItem>

         <ListItem className=' py-2' key={"الملفات "} disablePadding>
         <ListItemButton>
              <ListItemIcon>
                  <FolderCopyIcon style={{color : "#34d399"}}/>
              </ListItemIcon>
              <Link style={{ color: "#334155" }}  href='/dossiers'>الملفات</Link>
            </ListItemButton>
         </ListItem>

         <ListItem className=' py-2' key={" تقويم"} disablePadding>
         <ListItemButton>
              <ListItemIcon>
                  <CalendarMonthIcon  style={{color : "#34d399"}} />
              </ListItemIcon>
              <Link style={{ color: "#334155" }}  href='/calendar'>تقويم</Link>
            </ListItemButton>
         </ListItem>


         <ListItem className=' py-2' key={" أرشيف"} disablePadding>
         <ListItemButton>
              <ListItemIcon>
                  <ArchiveIcon  style={{color : "#34d399"}} />
              </ListItemIcon>
              <Link style={{ color: "#334155" }}  href='/archive'>أرشيف</Link>
            </ListItemButton>
         </ListItem>

      </List>
      
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}