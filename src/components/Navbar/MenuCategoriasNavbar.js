import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

//MUI:
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
//componentes
import mockCategories from '../Data/Categories'


const MenuCategoriasNavbar = () => {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    return new Promise ( (resolve,reject)=>{
        setTimeout( () => {
            //console.log(mockCategories)
            resolve(mockCategories)
        },2000)
    })
  }

  //esto se ejecuta después que se renderiza
  useEffect(  ()=>{
    getCategories()
    .then( (data) =>{
      setCategories(data)
    })
  },[])


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="text" 
        color="success"
      >
        Categorías
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >       

        {/* cargo dinamicamente las categorias en el menu */}
        {categories.map( (category) => 
            {
              return(
                  <div key={category.id}>
                    <Link className='btnNavbar' to={`/category/${category.id}`} >
                      <MenuItem  onClick={handleClose}>{category.name}</MenuItem>
                    </Link>
                  </div>
                )
            }
          )
        }
      </Menu>
    </div>
  );
}

export default MenuCategoriasNavbar