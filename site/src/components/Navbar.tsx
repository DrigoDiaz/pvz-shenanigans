import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor: "#2c5c3c"}}>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block', color: 'white'}, fontFamily: "Montserrat"}}
          >
            Plants vs Zombies
          </Typography>
          <Box sx={ {flexGrow: 1 } }></Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key="Home" sx={{ color: 'white', fontFamily: "Montserrat" }} href='/'>Home</Button>
            <Button key="About" sx={{ color: 'white', fontFamily: "Montserrat" }} href='/about'>About</Button>
          </Box>
        </Toolbar>
      </AppBar>
      </>
  );
}