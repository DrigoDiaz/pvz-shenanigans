import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function UserSelect() {
  const [side, sideSelect] = useState('Plants');

  const handleChange = (event: SelectChangeEvent) => {
    sideSelect(event.target.value);
  };

  return (
    <Box sx={{ display: 'inline-flex', minWidth: '25vw', padding: '1%'}}>
      <FormControl fullWidth>
        <InputLabel id="Label-Selector" defaultValue={'Plants'}></InputLabel>
        <Select
          labelId="Label-Selector"
          id="Side-Select"
          value={side}
          onChange={handleChange}
        >
          <MenuItem value={'Plants'}>Plants</MenuItem>
          <MenuItem value={'Zombies'}>Zombies</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}