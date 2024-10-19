"use client";
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PestControlIcon from '@mui/icons-material/PestControl';
import { Avatar, Collapse, Divider, Menu, MenuItem, Tooltip } from '@mui/material';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    background: '#f0f0f0',
    boxShadow: 'none',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`, // Adicionando a lógica baseada em "open"
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    })
  );
  

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [configuracoesOpen, setConfiguracoesOpen] = React.useState(false);
  const [relatorioOpen, setRelatorioOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setConfiguracoesOpen(false);
    setRelatorioOpen(false);
  };

  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenuAvatar = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          
        <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            
            sx={[
              {
                marginLeft: '2.2em',
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <div className='absolute right-5'>
            <div className='flex items-center justify-end relative'>
              <EmailOutlinedIcon sx={{ color: '#79818a', margin: 0, cursor: 'pointer' }}/>
              <p 
                className=
                  "absolute bg-teal-500 top-1 left-0 rounded-[5px] text-white r text-[0.75em] transform translate-y-[-.2em] translate-x-3 pl-[.5em] pr-[.5em]"
              >
                1
              </p>
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: 0 }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={openMenuAvatar ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenuAvatar ? 'true' : undefined}
                  >
                  <Avatar sx={{ width: 32, height: 32 }} src='images/4f733b83724e86f43c759de191f7e9fc.jpg'></Avatar>
                  </IconButton>
              </Tooltip>
            </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={openMenuAvatar}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar src='images/4f733b83724e86f43c759de191f7e9fc.jpg'/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar src='images/4f733b83724e86f43c759de191f7e9fc.jpg'/> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
            </div>
          </div>
        </Toolbar>
        
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: '#2a3f54', // Define a cor de fundo
            color: '#fff', // Define a cor do texto
          },
        }}
      >
        <DrawerHeader sx={{ background: '#2a3f54' }}>
        
          {open && <IconButton onClick={handleDrawerClose} sx={{ background: '#fff', borderRadius: '30px', ":hover": { background: '#fff' } }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>}
        </DrawerHeader>
        <List sx={{ background: '#2a3f54' }}>
            <ListItem sx={{ display: 'flex', }}>
                <Avatar
                    srcSet={'/images/4f733b83724e86f43c759de191f7e9fc.jpg'}
                    sx={{ width: 42, height: 42, transform: 'translateX(-.2em)' }}
                />
                <div className='ml-3'>
                    <h1 className='text-gray-300'>Olá,</h1>
                    <h1 className='text-white font-bold'>Usuario</h1>
                </div>
            </ListItem>
            {open && (
              <div className='flex ml-5 text-lg mt-4'>
                <h1 className='text-white'>PAINEL DE CONTROLE</h1>
              </div>
            )}
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    color: 'white',
                    ":hover": {
                        background: 'rgba(0,0,0,.3)'
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: 'white'
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <DashboardCustomizeRoundedIcon /> 
                </ListItemIcon>
                <ListItemText
                  primary='Dashboard'
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>






              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    color: 'white',
                    ":hover": {
                        background: 'rgba(0,0,0,.3)'
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: 'white'
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <PaymentIcon /> 
                </ListItemIcon>
                <ListItemText
                  primary='Vendas'
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>




              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    color: 'white',
                    ":hover": {
                        background: 'rgba(0,0,0,.3)'
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: 'white'
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <LocalMallSharpIcon /> 
                </ListItemIcon>
                <ListItemText
                  primary='Produtos'
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
            
        </List>
        {open && <div className='flex text-white'>
            <h1 className='ml-5 text-lg'>CONFIGURAÇÕES</h1>
        </div>}
        <List sx={{ background: '#2a3f54', color: 'white' }}>
            <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
                onClick={() => {
                  setConfiguracoesOpen(!configuracoesOpen)
                  setOpen(true);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    color: 'white',
                    ":hover": {
                        background: 'rgba(0,0,0,.3)'
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: 'white'
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <PestControlIcon /> 
                </ListItemIcon>
                <ListItemText
                  primary='Integrações'
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
                {open ? configuracoesOpen ? <KeyboardArrowUpSharpIcon/> : <KeyboardArrowDownIcon /> : undefined}
              </ListItemButton>
                <Collapse in={configuracoesOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Subopção 1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Subopção 2" />
                        </ListItemButton>
                    </List>
                </Collapse>








                <ListItemButton
                onClick={() => {
                  setRelatorioOpen(!relatorioOpen);
                  setOpen(true);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    color: 'white',
                    ":hover": {
                        background: 'rgba(0,0,0,.3)'
                    }
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: 'white'
                    },
                    open
                      ? {
                          mr: 2,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  <LaptopWindowsIcon /> 
                </ListItemIcon>
                <ListItemText
                  primary='Relatorios - Extras'
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
                {open ? relatorioOpen ? <KeyboardArrowUpSharpIcon/> : <KeyboardArrowDownIcon /> : undefined}
              </ListItemButton>
                <Collapse in={relatorioOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Subopção 1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Subopção 2" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </ListItem>
        </List>
      </Drawer>
    </>
  );
}