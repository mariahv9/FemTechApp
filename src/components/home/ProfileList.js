import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from '@mui/material';
import Profiles from '../../helper/profiles.json';

export default function ProfileList() {
  return (
    <ImageList cols={4} gap={15}>
      {Profiles.map((item) => (
        <ImageListItem key={item.img} sx={{ width: 300, height: 300, borderRadius: '16px' }}>
          <ImageListItemBar
            title={item.first_name}
            subtitle={item.last_name}
            actionIcon={
              <Button sx={{ color: 'white' }}>
                Ver Perfil
              </Button>
            }
          />
          <img
            src={`${item.profile_pic}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.profile_pic}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.first_name}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
