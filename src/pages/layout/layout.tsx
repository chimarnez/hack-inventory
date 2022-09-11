import { useState } from "react";
import logo from "../../assets/logo.svg";
import {
  Badge,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  List,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar } from "./components/app-bar";
import { theme } from "./components/theme";
import { Drawer, ResponsiveDrawer } from "./components/drawer";
import { MainListItems } from "./components/listItems";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { routes } from "./components/constants";
import { MenuAvatar } from "./components/avatar";
import { ProductView } from "./components/product-view";

function getNavTitle(path: string) {
  return routes[path.split("/")[1]] || "";
}

export const Layout = (props: any) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = props;
  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  if (location.pathname === "/") return <Navigate to="dashboard" />;

  const drawerContent = (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: 1,
            height: 200,
          }}
        >
          <img
            style={{
              opacity: open ? 1 : 0,
              transition: "all 0.2s",
              marginTop: 20,
            }}
            height={90}
            src={logo}
            alt="logo"
          />
          <Box sx={{ mt: 2, ...(!open && { opacity: 0 }) }}>
            <MenuAvatar />
          </Box>
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translateY(50%)",
            }}
            onClick={toggleDrawer}
          >
            <ChevronLeftIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Toolbar>
      {/* <Divider /> */}
      <List
        component="nav"
        sx={{
          ".MuiListItemIcon-root": {
            color: "#fff",
          },
          ".MuiListItemText-root": {
            color: "#fff",
          },
        }}
      >
        <MainListItems navigate={navigate} />
        <Divider sx={{ my: 1 }} />
      </List>
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                textTransform: "capitalize",
                ...(open && { display: { xs: "none", sm: "block" } }),
              }}
            >
              {getNavTitle(location.pathname)}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton color="inherit">
              <HelpIcon />
            </IconButton>
            <IconButton color="inherit" onClick={signOut}>
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            display: {
              xs: "none",
              sm: "block",
              "& .MuiDrawer-paper": {
                backgroundColor: theme.palette.primary.main,
              },
            },
          }}
          variant="permanent"
          open={open}
        >
          {drawerContent}
        </Drawer>
        <ResponsiveDrawer open={open} onClose={toggleDrawer}>
          {drawerContent}
        </ResponsiveDrawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {props.children}
          </Container>
        </Box>
      </Box>
      <ProductView open={modalOpen} onClose={toggleModal} />
    </ThemeProvider>
  );
};
