import React, { useState } from 'react'
import { AppBar, Badge, Box, Button, FormControl, InputAdornment, InputLabel, Link, ListItem, Menu, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SmsIcon from '@mui/icons-material/Sms';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
const Main = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        <PhoneIcon sx={{ position: 'relative', color: '#2CCE6C', fontWeight: '400', fontSize: '25', top: 5 }} />
        <Typography variant='h6' color='#2CCE6C'>7030 300 400</Typography>
        <Typography variant='h6' color='#2CCE6C' >Or</Typography>
        <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C' }}>Get a callback</Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: "10px" }}>

          <img style={{ height: '140px' }}
            src='https://content.jdmagicbox.com/comp/pune/t3/020pxx20.xx20.220312055411.s6t3/catalogue/lupin-diagnostics-aundh-pune-pathology-labs-d14wkhwklq.jpg' />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
          <LocationOnIcon />
          <Typography variant='h6' >Mumbai</Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
          <TextField placeholder='Search tests/packages'

            size='small'
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                )
              }
            }} /></Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
          <LocationCityOutlinedIcon /><Typography variant='h6'>Center Locator</Typography></Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
          <Badge variant='dot' color='secondary' overlap='circular'>
            <ShoppingCartIcon />
          </Badge>
          <Typography variant='h6'>Cart</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
          <Button variant="contained" startIcon={<PersonIcon />} sx={{ backgroundColor: '#2CCE6C' }}>Customer Login</Button>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: '#EBE8FC', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '28px' }}>

      
          

            <Button color='secondary' onClick={handleClick} endIcon={<KeyboardArrowDownIcon />} sx={{ textTransform: 'capitalize', fontWeight: '700' }}>Book an Appointment</Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

              elevation={0}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose} >
                <Link to='/link 1' sx={{ textDecoration: 'none',minWidth:'180px' }}> Link1</Link>
              </MenuItem>
            </Menu>


            <Button color='secondary' onClick={handleClick} endIcon={<KeyboardArrowDownIcon />} sx={{ textTransform: 'capitalize', fontWeight: '700' }}>Blood Test & Packages</Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

              elevation={0}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose} >
                <Link to='/link 1' sx={{ textDecoration: 'none',minWidth:'180px' }}> Link1</Link>
              </MenuItem>
            </Menu>
            <Button color='secondary' onClick={handleClick} endIcon={<KeyboardArrowDownIcon />} sx={{ textTransform: 'capitalize', fontWeight: '700' }}>For Doctors</Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

              elevation={0}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose} >
                <Link to='/link 1' sx={{ textDecoration: 'none',minWidth:'180px' }}> Link1</Link>
              </MenuItem>
            </Menu>
            <Button color='secondary' onClick={handleClick} endIcon={<KeyboardArrowDownIcon />} sx={{ textTransform: 'capitalize', fontWeight: '700' }}>Partner with us</Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

              elevation={0}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose} >
                <Link to='/link 1' sx={{ textDecoration: 'none',minWidth:'180px' }}> Link1</Link>
              </MenuItem>
            </Menu>


            <Button color='secondary' onClick={handleClick}  sx={{ textTransform: 'capitalize', fontWeight: '700' }}>Blogs</Button>

            <Button color='secondary' onClick={handleClick} endIcon={<KeyboardArrowDownIcon />} sx={{ textTransform: 'capitalize', fontWeight: '700' }}>About us</Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

              elevation={0}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose} >
                <Link to='/link 1' sx={{ textDecoration: 'none',minWidth:'180px' }}> Link1</Link>
              </MenuItem>
            </Menu>
            <Button color='secondary' onClick={handleClick} endIcon={<KeyboardArrowDownIcon />} sx={{ textTransform: 'capitalize', fontWeight: '700' }}>Contact Us</Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}

              elevation={0}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleClose} >
                <Link to='/link 1' sx={{ textDecoration: 'none',minWidth:'180px' }}> Link1</Link>
              </MenuItem>
            </Menu>
 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <img height='350px'
          src='https://franchiseindia.s3.ap-south-1.amazonaws.com/franchisor/template/slider/0206/0730/880900613.webp' />
        <Box sx={{
          marginLeft: '1rem',
          boxShadow: '#cfcfcf 2px 2px 5px',
          border: '1px #fefefe solid',
          borderRadius: '0px 0px 8px 8px'
        }}>
          <Box sx={{ backgroundColor: '#6C4675', padding: '1.5rem', textAlign: 'center', borderRadius: '8px 8px 0 0', marginBottom: '1rem' }}>
            <Typography variant='h6' color='white'>Book a Free Home Collection!</Typography>
          </Box>
          <Box sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            height: '220px'

          }

          }>
            <TextField label='Enter your full name' size='small' />
            <TextField label='Enter your contact number' size='small' />
            <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize', width: '20%' }}>Submit</Button>
          </Box>

        </Box>
        <Button variant='contained' startIcon={<SmsIcon />}
          sx={{ textTransform: 'capitalize', backgroundColor: '#2CCE6C', marginTop: '300px', bottom: '10px', right: '100px', zIndex: '1' }}>Chat with us</Button>

      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', height: '75px', width: '100%', color: 'white', backgroundColor: '#6C4675', alignItems: 'center' }}>
        <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><BiotechOutlinedIcon /><Typography variant='h6'>Book a text</Typography></Box>
        <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><InventoryIcon /><Typography variant='h6'>Health Packages</Typography></Box>
        <Box sx={{ width: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}><FileDownloadOutlinedIcon /> <Typography variant='h6'>Download Report</Typography></Box>

      </Box>

    </Box>
  )
}

export default Main
