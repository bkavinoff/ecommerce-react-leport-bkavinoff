import * as React from 'react';
import {Link} from 'react-router-dom'

//MUI:
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { green } from '@mui/material/colors';

// const primaryGreen = green[500];
export default function IconButtons() {
    
  return (
    <Stack direction="row" spacing={1}>
      <Link className='btnNavbar' to='/cart'>
        <IconButton color="success" aria-label="Agregar al Carrito">
          <ShoppingCartIcon />
        </IconButton>
      </Link>
    </Stack>
  );
}