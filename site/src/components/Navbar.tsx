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
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' } }}
          >
            Plants vs Zombies
          </Typography>
          <Box sx={ {flexGrow: 1 } }></Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key="Home" sx={{ color: '#fff' }} href='/'>Home</Button>
            <Button key="About" sx={{ color: '#fff' }} href='/about'>About</Button>
          </Box>
        </Toolbar>
      </AppBar>
      </>
  );
}