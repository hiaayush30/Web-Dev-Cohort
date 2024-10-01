import { useState, useEffect, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { modeContext } from '../context/ModeContext';

function ResponsiveAppBar() {
  // const [dark,setDark]=useState(false);
  // useEffect(() => {
  //   if (dark) {
  //     document.documentElement.classList.add('dark');
  //     // document.documentElement refers to the root element of an HTML document, which is the <html> tag.
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [dark]);
  const { dark, setDark } = useContext(modeContext);

  const toggleDark = () => {
    setDark(!dark);
  }

  const darkTheme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
    },
  });


  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static" className='transition-all duration-150'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AlarmOnIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              className='cursor-pointer'
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to={'/home'} >Taskify</Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >

                <MenuItem key='view todos' onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}><button onClick={() => { navigate('/view') }}>
                    View todos
                  </button></Typography>
                </MenuItem>

                <MenuItem key='logout' onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}><button onClick={toggleDark}>
                    {dark ? 'Light Mode' : 'Dark Mode'}</button></Typography>
                </MenuItem>

                <MenuItem key='logout' onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}><button onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/login');
                  }}>
                    Logout</button></Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AccountCircleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} fontSize='large' />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to={'/home'}>Taskify</Link>
            </Typography>
            <div className='flex gap-5 items-center'>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  <button onClick={() => { navigate('/view') }}>YOUR TODOS</button>
                </Button>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  onClick={() => {
                    localStorage.removeItem('token');
                    navigate('/login');
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Logout
                </Button>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  onClick={toggleDark}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {dark ? <LightModeIcon /> : <DarkModeIcon />}
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }} className='absolute right-0' >
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon fontSize='large' />
                </IconButton>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;