import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </Toolbar>
      </AppBar>

      <Box p={2}>
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;