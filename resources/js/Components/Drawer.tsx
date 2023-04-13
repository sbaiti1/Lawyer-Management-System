import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAvatar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Drawer() {
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
      {/* <List>
        {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <List >
      <ListItem className='mt-5 py-2' key={"الصفحة الرئيسية"} disablePadding>
  <ListItemButton>
      <HomeIcon style={{ color: "#34d399" }} />
    <ListItemText style={{ color: "#334155" }} primary={"الصفحة الرئيسية"} />
  </ListItemButton>
</ListItem>


         <ListItem className=' py-2' key={"الصفحة الرئيسية"} disablePadding>
         <ListItemButton>
              <ListItemIcon>
                  <PeopleAltIcon style={{color : "#34d399"}}/>
              </ListItemIcon>
              <ListItemText style={{ color: "#334155" }} primary={" الموكلين"} />
            </ListItemButton>
         </ListItem>

         <ListItem className=' py-2' key={"الصفحة الرئيسية"} disablePadding>
         <ListItemButton>
              <ListItemIcon>
                  <FolderCopyIcon style={{color : "#34d399"}}/>
              </ListItemIcon>
              <ListItemText style={{ color: "#334155" }} primary={" الملفات"} />
            </ListItemButton>
         </ListItem>

         <ListItem className=' py-2' key={" تقويم"} disablePadding>
         <ListItemButton>
              <ListItemIcon>
                  <CalendarMonthIcon  style={{color : "#34d399"}} />
              </ListItemIcon>
              <ListItemText style={{ color: "#334155" }} primary={" تقويم"} />
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