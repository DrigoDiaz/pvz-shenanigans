import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavbarMenu from './NavbarMenu';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleHome() {
    navigate('/');
  }

  function handleAbout() {
    navigate('/about');
  }

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#2c5c3c" }}>
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
        <Toolbar>
          {isSmallScreen ? (
            // Content for small screens
            <>
              <Typography
                variant="body1"
                sx={{ flexGrow: 0, display: { sm: 'block', color: 'white' }, fontFamily: "Montserrat" }}
              >
                Plants vs Zombies
              </Typography>
              <Box sx={{ flexGrow: 1 }}></Box>
              <NavbarMenu></NavbarMenu>
            </>
          ) : (
            // Content for large screens
            <>
              <Typography
                variant="h6"
                sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block', color: 'white' }, fontFamily: "Montserrat" }}
              >
                Plants vs Zombies
              </Typography>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button key="Home" sx={{ color: 'white', fontFamily: "Montserrat" }} onClick={handleHome}>Home</Button>
                <Button key="About" sx={{ color: 'white', fontFamily: "Montserrat" }} onClick={handleAbout}>About</Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}