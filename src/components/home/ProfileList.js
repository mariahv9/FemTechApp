import * as React from 'react';
import { useState } from 'react';
import Profiles from '../../helper/profiles.json';
import Professions from '../../helper/professions.json';
import { Button, TextField, MenuItem, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Modal from '../profile/Modal';

export default function ProfileList() {

  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)

  const [perfiles, setPerfiles] = React.useState(Profiles)

  const [profesion, setProfesion] = React.useState('');

  const handleChangeProfesion = async (event) => {
    perfiles[event.target.name] = event.target.value;
    console.log(perfiles.map(perfil => perfil.profession = perfiles[event.target.name]))
    setPerfiles(perfiles);
    setProfesion(event.target.value);
  };

  return (
    <div>
      <div>
        <TextField
          id="filled-select-profession"
          height="250"
          width="400"
          select
          label="Selecciona la profesion"
          variant="filled"
          value={profesion}
          onChange={handleChangeProfesion}
        >
          {Professions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <ImageList cols={4} gap={15}>
        {perfiles.map((item) => (
          <ImageListItem key={item.img} sx={{ width: 300, height: 300, borderRadius: '16px' }}>
            <ImageListItemBar
              title={item.first_name + " " + item.last_name}
              subtitle={item.profession}
              actionIcon={
                <Button onClick={() => setShowModal(true)} sx={{ color: 'white' }}>
                  Ver Perfil
                </Button>
              }
            />
            <Modal onClose={handleOnClose} visible={showModal}/>
            {/* <ModalDOS onClose={handleOnClose} visible={showModal}/> */}
            <img
              src={`${item.profile_pic}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.profile_pic}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.first_name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
