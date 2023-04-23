import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Professions from '../../helper/professions.json';
import MenuItem from '@mui/material/MenuItem';
import Profiles from '../../helper/profiles.json';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from '@mui/material';

export default function ProfileSelector() {
  const [perfiles, setPerfiles] = React.useState(
    {
      "id": 0,
      "first_name": '',
      "last_name": '',
      "email": '',
      "mentor": false,
      "profession": '',
      "profile_pic": ''
    }
  )

  const [profesion, setprofesion] = React.useState('');

  const handleChangeProfesion = async (event) => {
    perfiles[event.target.name] = event.target.value;
    setPerfiles(perfiles);
    setprofesion(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-select-profession"
          select
          label="Selecciona la profesion"
          variant="filled"
        >
          {Professions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}