import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export default function SearchBar() {
  const theme = useTheme();
  const checkScreenSize = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50vh' } }}
      noValidate
      autoComplete="off"
    >
      {checkScreenSize ? (
        <TextField id="user-input" label="Search" variant="standard" sx={{width: '25vh'}}/>
      ) : (
        <TextField id="user-input" label="Search" variant="standard" sx={{width: '65vh'}} />
      )}
    </Box>
  );
}