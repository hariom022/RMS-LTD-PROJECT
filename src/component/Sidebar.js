import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdbIcon from "@mui/icons-material/Adb"; 
import InventoryIcon from "@mui/icons-material/Inventory";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BugReportIcon from "@mui/icons-material/BugReport";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link, NavLink } from "react-router-dom";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import { useMediaQuery } from '@mui/material';

const drawerWidth = 270;
const mobileThreshold = 900; // Adjust as needed

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = (props) => {

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [isCollapse, setIsCollapse] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileThreshold
  );
  const isMobileView = useMediaQuery('(max-width:600px)');

    // Function to toggle drawer state
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Function to close drawer when a navigation item is clicked
  const handleCloseDrawer = () => {
    if (isMobileView) {
      setOpen(false);
    }
  };


 

  const handleDrawer = () => {
    if (open == false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileThreshold);
      if (window.innerWidth <= mobileThreshold && open) {
        setOpen(false);
      }
     
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ boxShadow: "2px 2px 20px" }} >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{
                marginRight: 1,
                ...(open && { display: "block" }),
              }}
            >
              <MenuIcon sx={{ color: " #706d6d" }} />
            </IconButton>
            <Link to={"/"} sx={{ color: "black" }} className="dashboard-header">
              <Typography sx={{ pr: "10px" }}>Dashboard</Typography>
            </Link>

            <Typography sx={{ pr: "10px", color: " #706d6d" }}>
              Users
            </Typography>
            <Typography sx={{ color: " #706d6d" }}>Settings</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <NotificationsIcon sx={{ mr: "10px", color: " #706d6d" }} />
            <DraftsIcon sx={{ mr: "20px", color: " #706d6d" }} />
            <Stack direction="row" spacing={2}>
              <Link to={"/login"}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Link>
            </Stack>
          </Box>
        </Toolbar>

        <Divider />
        <Box sx={{ m: "10px 30px" }} className="">
          <BasicBreadcrumbs />
        </Box>
      </AppBar>

      <Drawer variant="permanent" open={open} onClose={toggleDrawer} >
        <DrawerHeader
          className="drawer-header "
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {/* <img
            src="https://www.rmsltd.rw/index.php?eID=dumpFile&t=f&f=10775&token=b1e36e4e74fa57ae0af2aa021c502f36e86dff2e"
            height="30px"
          /> */}
          <Typography variant="h5" sx={{ color: "#fff",fontWeight:'bold' }}><span style={{color:'#054D6F'}}>R</span><span style={{color:'rgb(200 131 31)'}}>M</span ><span style={{    color: "#116711"}}>S</span> </Typography>
        </DrawerHeader>
        <Divider />
        <List className="list-items">
          <NavLink to={"/"}>
            <ListItem disablePadding sx={{ display: "block" }} onClick={handleCloseDrawer}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                  
                >
                  <DashboardIcon />
                </ListItemIcon>

                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Dashboard</ListItemText>
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
        <Box>
          <List className="list-items" sx={{ paddingRight: "20px" }}>
            <ListItem disablePadding sx={{ display: "block", px: 2.5 }}>
              <ListItemText
                primary="COMPONENT"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItem>

            <NavLink to={"/management"}>
              <ListItem disablePadding sx={{ display: "block" }} onClick={handleCloseDrawer}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>User Management</ListItemText>
                  
                </ListItemButton>
              </ListItem>
            </NavLink>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={handleCollapse}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AdbIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>Master Data</ListItemText>
                
                <Typography sx={{ opacity: open ? 1 : 0, width: "0px" }}>
                  {isCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Typography>
              </ListItemButton>
            </ListItem>

            <Collapse in={isCollapse} timeout={"auto"} unmountOnExit>
              <ListItem onClick={handleCloseDrawer}>
                <NavLink to={"/masterData"}>
                  <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "53px" }}>Master Data 1</ListItemText>
                 
                </NavLink>
              </ListItem>
              <ListItem onClick={handleCloseDrawer}>
                <NavLink to={"/masterData"}>
                <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "53px" }}>Master Data 2</ListItemText>

                </NavLink>
              </ListItem>
              <ListItem onClick={handleCloseDrawer}>
                <NavLink to={"/masterData"}>
                <ListItemText sx={{ opacity: open ? 1 : 0, marginLeft: "53px" }}>Master Data 3</ListItemText>

                </NavLink>
              </ListItem>
            </Collapse>

            <NavLink to={"/inventory"}>
              <ListItem disablePadding sx={{ display: "block" }} onClick={handleCloseDrawer}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <InventoryIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>Inventory Update</ListItemText>
                  
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/newRequest"}>
              <ListItem disablePadding sx={{ display: "block" }} onClick={handleCloseDrawer}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>New Request</ListItemText>
                 
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/reports"}>
              <ListItem disablePadding sx={{ display: "block" }} onClick={handleCloseDrawer}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <BugReportIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>Reports</ListItemText>
                 
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/auth"}>
              <ListItem disablePadding sx={{ display: "block" }} onClick={handleCloseDrawer}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <PersonAddAlt1Icon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>Role & Authentication</ListItemText>
                 
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Box>
        <DrawerHeader className="drawer-bottom">
          <IconButton onClick={handleDrawer} className="toggal-btn">
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, padding: "0px" }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
};

export default Sidebar;
