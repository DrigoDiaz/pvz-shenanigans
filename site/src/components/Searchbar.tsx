import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '50vh' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="user-input" label="Search" variant="standard" />
    </Box>
  );
}