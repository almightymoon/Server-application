import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import NotificationsIcon from "@mui/icons-material/Notifications";

import { mainListItems, secondaryListItems } from "./listItems.jsx";
import Chart from "./Chart.jsx";

import Deposits from "./Deposits.jsx";
import Orders from "./Orders.jsx";
import { Avatar, Stack, TextField } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}>
      {"Copyright © "}
      <Link color='inherit' href='https://cloudlem.com/'>
        cloudlem
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

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
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              color: "black",
              background: "white",

              // keep right padding when drawer closed
            }}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}>
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <TextField
                name='search'
                id='search'
                placeholder='Search'
                variant='standard'
              />
              <IconButton color='inherit'>
                <Badge badgeContent={0} color='secondary'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentFill'>
                    <path d='M3.494 6.818a6.506 6.506 0 0 1 13.012 0v2.006c0 .504.2.988.557 1.345l1.492 1.492a3.869 3.869 0 0 1 1.133 2.735 2.11 2.11 0 0 1-2.11 2.11H2.422a2.11 2.11 0 0 1-2.11-2.11c0-1.026.408-2.01 1.134-2.735l1.491-1.492c.357-.357.557-.84.557-1.345V6.818Zm-1.307 7.578c0 .13.106.235.235.235h15.156c.13 0 .235-.105.235-.235 0-.529-.21-1.036-.584-1.41l-1.492-1.491a3.778 3.778 0 0 1-1.106-2.671V6.818a4.63 4.63 0 1 0-9.262 0v2.006a3.778 3.778 0 0 1-1.106 2.671L2.77 12.987c-.373.373-.583.88-.583 1.41Zm4.49 4.354c0-.517.419-.937.937-.937h4.772a.938.938 0 0 1 0 1.875H7.614a.937.937 0 0 1-.938-.938Z'></path>
                  </svg>
                </Badge>
              </IconButton>

              <Typography variant='text' color='#0F0934'>
                Abid Karim
              </Typography>
              <Stack>
                <Avatar alt='Abid Kareem' src='/static/images/avatar/3.jpg' />
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component='nav'>
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}>
          <Toolbar />
          <Box
            sx={{
              mt: 4,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "20px 20px",
            }}
            p={2}>
            {/* Recent Deposits */}
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
              sx={{
                display: "flex",
                gap: "5%",
                justifyContent: "center",
                marginTop: "2%",
              }}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "244px",
                  height: "135px",
                  background: "#E3F5FF",
                  gap: "8px",
                  borderRadius: "16px",
                  opacity: ",",
                }}>
                <Deposits />
              </Paper>{" "}
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  width: "244px",
                  height: "135px",
                  background: "#E5ECF6",
                  padding: " var(--24)",
                  gap: "var(--8)",
                  borderRadius: "16px",
                  opacity: ",",
                }}>
                <Deposits />
              </Paper>{" "}
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  width: "244px",
                  height: "135px",
                  background: "#E3F5FF",
                  padding: " var(--24)",
                  gap: "var(--8)",
                  borderRadius: "16px",
                  opacity: ",",
                }}>
                <Deposits />
              </Paper>{" "}
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  width: "244px",
                  height: "135px",
                  background: "#E5ECF6",
                  padding: " var(--24)",
                  gap: "var(--8)",
                  borderRadius: "16px",
                  opacity: ",",
                }}>
                <Deposits />
              </Paper>
            </Grid>

            {/* Chart */}
            <Grid item xs={12} md={8} lg={9} sx={{ display: "flex" }}>
              <Paper
                sx={{
                  p: 2,
                  border: " 12px",
                  width: "743px",
                }}>
                <Chart />
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  border: " 12px",
                }}></Paper>
            </Grid>

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders />
              </Paper>
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
