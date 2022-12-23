import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { width } from "@mui/system";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import {
  Divider,
  Drawer,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function Navbar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();
  const { data: session } = useSession();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#d4d4d4", 0.15),
    "&:hover": {
      backgroundColor: alpha("#d4d4d4", 0.25),
    },
    borderColor: "red",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "30%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  }));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("token");
    router.push("http://localhost:3001/auth/login");
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: "800",
              letterSpacing: "1px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{ fontWeight: "600", fontSize: "32px", color: "#a020f0" }}
            >
              L
            </Typography>
            earn
          </Typography>
          <div></div>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Categories
          </Typography>

          <Search sx={{ display: { xs: "none", md: "flex" }, border: 1 }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ cursor: "pointer" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Typography
            noWrap
            component="a"
            color="primary"
            href="/"
            sx={{
              mr: 2,
              color: "inherit",
              textDecoration: "none",
              margin: "5px",
              fontSize: "15px",
              display: { xs: "none", md: "none", lg: "flex", xl: "flex" },
            }}
          >
            EDure Business
          </Typography>

          <Typography
            noWrap
            component="a"
            color="primary"
            href="/"
            sx={{
              mr: 2,
              padding: "10px",
              color: "inherit",
              margin: "5px",
              textDecoration: "none",
              fontSize: "15px",
              display: { xs: "none", md: "none", lg: "flex", xl: "flex" },
            }}
          >
            Teach on EDure
          </Typography>

          {!userLoggedIn ? (
            <>
              <Button
                variant="outlined"
                sx={{
                  color: "inherit",
                  fontWeight: "600",
                  border: 1,
                  display: { md: "flex", xs: "none" },
                  borderRadius: "1px",
                }}
                href="/auth/login"
              >
                Login
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "inherit",
                  fontWeight: "600",
                  border: 1,
                  borderRadius: "1px",
                  display: { xs: "none", md: "flex" },
                }}
                href="/auth/signUp"
              >
                Sign up
              </Button>
            </>
          ) : (
            <Button
              variant="outlined"
              sx={{
                color: "inherit",
                fontWeight: "600",
                border: 1,
                borderRadius: "1px",
                display: { xs: "none", md: "flex" },
              }}
              onClick={onLogout}
            >
              Logout
            </Button>
          )}
          <Button
            sx={{
              color: "inherit",
              display: { xs: "none", md: "none" },
            }}
            href="/addToCart"
          >
            <ShoppingCartOutlinedIcon />
          </Button>

          {/* Mobile Screen view */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Menu">
              <IconButton
                size="large"
                aria-label="account of current user"
                arial-aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {
                  setOpenDrawer(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Drawer
              open={openDrawer}
              anchor={"left"}
              onClose={() => {
                setOpenDrawer(true);
              }}
              sx={{ display: { lg: "none", xl: "none" } }}
            >
              <div style={{ width: 250 }} onClick={() => setOpenDrawer(false)}>
                <ListItem
                  component="a"
                  href="/auth/login"
                  sx={{ color: "a020f0" }}
                >
                  <ListItemText primary="Log in" />
                </ListItem>
                <ListItem component="a" href="#" sx={{ color: "a020f0" }}>
                  <ListItemText primary="Sign up" />
                </ListItem>
                <Divider />

                {/* <ListItem>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem> */}
              </div>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Search">
              <Button
                sx={{
                  color: "inherit",
                  display: { xs: "flex", md: "flex", lg: "none", xl: "none" },
                }}
                href="/addToCart"
              >
                <SearchIcon />
              </Button>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Add to Cart">
              <Button
                sx={{
                  color: "inherit",
                  display: { xs: "flex", md: "flex", lg: "none", xl: "none" },
                }}
                href="/addToCart"
              >
                <ShoppingCartOutlinedIcon />
              </Button>
            </Tooltip>
          </Box>
          {session && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile" src={`${session.user?.image}`} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu} sx={{ mt: "10px" }}>
                  <Link
                    href="/user/edit-profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid container spacing={1} columns={8}>
                        <Grid>
                          <Avatar
                            alt="Profile"
                            sx={{
                              width: 56,
                              height: 56,
                              margin: "10px",
                            }}
                            src={`${session.user?.image}`}
                          />
                        </Grid>
                        <Grid>
                          <Typography
                            component={"h1"}
                            sx={{ ml: "10px", mt: "10px", fontWeight: "600" }}
                          >{`${session.user?.name}`}</Typography>
                          <Typography
                            textAlign="center"
                            sx={{ ml: "10px", color: "gray", fontSize: "15px" }}
                          >{`${session.user?.email}`}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem sx={{ ml: "10px", fontSize: "15px" }}>
                  My Learning
                </MenuItem>
                <MenuItem sx={{ ml: "10px", fontSize: "15px" }}>
                  My Cart
                </MenuItem>
                <MenuItem sx={{ ml: "10px", fontSize: "15px" }}>
                  Wishlist
                </MenuItem>
                <MenuItem sx={{ ml: "10px", fontSize: "15px" }}>
                  My Learning
                </MenuItem>
                <Divider />
                <MenuItem sx={{ ml: "10px", fontSize: "15px" }}>
                  Public profile
                </MenuItem>
                <MenuItem sx={{ ml: "10px", fontSize: "15px" }}>
                  Edit profile
                </MenuItem>
                <Divider />
                <MenuItem sx={{ ml: "10px", fontSize: "15px" }}>Help</MenuItem>
                <MenuItem sx={{ ml: "10px", fontSize: "15px" }}>
                  Log out
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
