"use client";
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import { Box, ListItemIcon, MenuItem } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image';

export default function Integra() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Box component="main" className='bg-[#f0f1f0] h-screen' sx={{ flexGrow: 1, p: 3, paddingTop: '3.75em' }}>
            <div className="w-[97%] m-auto">
                <div className='flex justify-end mt-4'>
                    <button className='bg-[#42b883] text-white pt-3 pb-3 pr-1 pl-1 rounded-2xl font-bold'>+Criar Novas Empresa</button>
                </div>
                {/* Container */}
                <section className='bg-white mt-6 rounded-lg'>
                    {/* Header */}
                    <div className='w-[97%] m-auto'>
                        <div className='grid items-center justify-between border-b-[1px] border-b-[#ccc] pb-4 md:flex'>
                            <div className='grid gap-2 items-center mt-4 md:mt-0 sm:flex'>
                                <h2 className='text-[#76889b] font-bold'>ALFIX COMERCIO DE ELETRONICO EIRELI</h2>
                                <p className='text-[#777] text-sm'>35.912.838/0001-36</p>
                            </div>
                            <div>
                                <List
                                    component="nav"
                                    aria-label="Device settings"
                                >
                                    <ListItemButton
                                        sx={{ border: "1px solid #ccc" }}
                                        className="bg-[white] w-2/5 md:w-full"
                                        id="lock-button"
                                        aria-haspopup="listbox"
                                        aria-controls="lock-menu"
                                        aria-label="when device is locked"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClickListItem}
                                    >
                                    <ListItemText secondary="Ações" />
                                    {open ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                                    </ListItemButton>
                                </List>
                                <Menu
                                    id="lock-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'lock-button',
                                    role: 'listbox',
                                    }}
                                >
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Image src="/images/amazon_icon.png" alt="amazon" width={20} height={20}/>
                                        </ListItemIcon>
                                        <div className='block'>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta Amazon</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor da amazon</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='flex justify-left'>
                                            <Image src="/images/mercado_livre.jpg" alt="mercado livre" width={40} height={40} className='-translate-x-3'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta meli</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor do Mercado Livre</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Image src="/images/shopee.png" alt="shoppe" width={20} height={20} />
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta Shopee</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor da shopee</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='relative text-[#76889b]'>
                                            <WorkOutlineIcon />
                                            <EditIcon className='absolute text-[#76889b] text-[.7em] right-1/2 top-[1.2em] -translate-y-1/2'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Editar Empresa</p>
                                            <p className='text-sm'>Editar informações da empresa</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='relative text-[red]'>
                                            <WorkOutlineIcon />
                                            <CloseIcon className='absolute text-[red] text-[.7em] right-1/2 top-[1.2em] -translate-y-1/2'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Excluir Empresa</p>
                                            <p className='text-sm'>Remover empresa do sistema</p>
                                        </div>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <table className='w-full border-collapse mt-5'>
                                <thead>
                                    <tr className='text-[#aaa] text-left'>
                                        <th className='pl-3'>ID</th>
                                        <th className='pl-3'>NOME</th>
                                        <th className='pl-3'>MARKETPLACE</th>
                                        <th className='pl-3'>IMPOSTO (%)</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody className='text-center'>
                                    <tr className='pt-3 pb-3'>
                                        <td className='pt-2 pb-2'>
                                            <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#ccc] rounded-l-2xl h-[4em] text-sm text-left pl-3 flex items-center'>
                                                533602951
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                ALFIX SHOP
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                Mercado Livre
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                8%
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                className=
                                                  'border-t-[1px] w-full border-b-[1px] border-r-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 rounded-r-2xl flex items-center justify-end gap-2'
                                            >
                                                <span className='border-[1px] border-[#ccc] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer'>
                                                    <EditIcon className='text-lg'/>
                                                </span>
                                                <span className='border-[1px] border-[red] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer mr-2'>
                                                    <LogoutIcon className='text-lg text-[red]'/>
                                                </span>
                                                
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='-translate-y-4'>
                                        <td className='pt-2 pb-2'>
                                            <div className='border-t-[1px] border-l-[1px] border-b-[1px] h-[4em] border-[#ccc] rounded-l-2xl pt-4 pb-4 text-sm text-left pl-3 flex items-center'>
                                                533602951
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                ALFIX SHOP
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                Mercado Livre
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                8%
                                            </div>
                                        </td>
                                        <td className='flex justify-end gap-3'>
                                            <div
                                                className=
                                                  'border-t-[1px] w-full border-b-[1px] border-r-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 rounded-r-2xl translate-y-2 flex items-center justify-end gap-2'
                                            >
                                                <button className='border-[2px] border-[#42b883] pt-2 pb-2 pl-1 pr-1 text-[#42b883] rounded-md'>Vincular Ads</button>
                                                <span className='border-[1px] border-[#ccc] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer'>
                                                    <EditIcon className='text-lg'/>
                                                </span>
                                                <span className='border-[1px] border-[red] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer mr-2'>
                                                    <LogoutIcon className='text-lg text-[red]'/>
                                                </span>
                                                
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        

                        {/* Tabela responsiva */}
                        <div className="md:hidden pb-8">
                            <div className="shadow-xl mt-4 rounded-3xl w-[95%] m-auto border-[1px] border-[#f0f0f1]">
                                <div className="w-11/12 m-auto pt-4 pb-4">
                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">ID</h2>
                                        <p className="text-center font-[700] mt-1">533602951</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">NOME</h2>
                                        <p className="text-center mt-1">ALFIX SHOP</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">MARKETPLACE</h2>
                                        <p className="text-center mt-1">Mercado Livre</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">IMPOSTO (%)</h2>
                                        <p className="text-center mt-1">8%</p>
                                    </div>

                                    <div className="border-[#aaa] pt-3 pb-3 flex flex-col justify-center items-center gap-3 sm:flex">
                                        {/* <button className='border-[2px] border-[#42b883] pt-2 pb-2 pl-1 pr-1 text-[#42b883] rounded-md'>Vincular Ads</button> */}
                                        <span className='border-[1px] border-[#ccc] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer sm:w-8 sm:h-8'>
                                            <EditIcon className='text-lg'/>
                                        </span>
                                        <span className='border-[1px] border-[red] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer mr-2 sm:w-8 sm:h-8'>
                                            <LogoutIcon className='text-lg text-[red]'/>
                                        </span>
                                                
                                    </div>
                                </div>
                            </div>


                            <div className="shadow-xl mt-4 rounded-3xl w-[95%] m-auto border-[1px] border-[#f0f0f1]">
                                <div className="w-11/12 m-auto pt-4 pb-4">
                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">ID</h2>
                                        <p className="text-center font-[700] mt-1">533602951</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">NOME</h2>
                                        <p className="text-center mt-1">ALFIX SHOP</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">MARKETPLACE</h2>
                                        <p className="text-center mt-1">Mercado Livre</p>
                                    </div>

                                    <div className="border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">IMPOSTO (%)</h2>
                                        <p className="text-center mt-1">8%</p>
                                    </div>

                                    <div className="border-[#aaa] pt-3 pb-3 flex flex-col justify-center items-center gap-3 sm:flex">
                                        <button className='border-[2px] border-[#42b883] pt-2 pb-2 pl-1 pr-1 text-[#42b883] rounded-md'>Vincular Ads</button>
                                        <span className='border-[1px] border-[#ccc] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer sm:w-8 sm:h-8'>
                                            <EditIcon className='text-lg'/>
                                        </span>
                                        <span className='border-[1px] border-[red] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer mr-2 sm:w-8 sm:h-8'>
                                            <LogoutIcon className='text-lg text-[red]'/>
                                        </span>
                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-white mt-6 rounded-lg'>
                    {/* Header */}
                    <div className='w-[97%] m-auto'>
                        <div className='grid items-center justify-between border-b-[1px] border-b-[#ccc] pb-4 md:flex'>
                            <div className='grid gap-2 items-center mt-4 md:mt-0 sm:flex'>
                                <h2 className='text-[#76889b] font-bold'>MCOM COMERCIO VEREJISTA LTDA</h2>
                                <p className='text-[#777] text-sm'>51.656.878/0001-21</p>
                            </div>
                            <div>
                                <List
                                    component="nav"
                                    aria-label="Device settings"
                                >
                                    <ListItemButton
                                        sx={{ border: "1px solid #ccc" }}
                                        className="bg-[white] w-2/5 md:w-full"
                                        id="lock-button"
                                        aria-haspopup="listbox"
                                        aria-controls="lock-menu"
                                        aria-label="when device is locked"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClickListItem}
                                    >
                                    <ListItemText secondary="Ações" />
                                    {open ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                                    </ListItemButton>
                                </List>
                                <Menu
                                    id="lock-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'lock-button',
                                    role: 'listbox',
                                    }}
                                >
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Image src="/images/amazon_icon.png" alt="amazon" width={20} height={20}/>
                                        </ListItemIcon>
                                        <div className='block'>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta Amazon</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor da amazon</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='flex justify-left'>
                                            <Image src="/images/mercado_livre.jpg" alt="mercado livre" width={40} height={40} className='-translate-x-3'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta meli</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor do Mercado Livre</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Image src="/images/shopee.png" alt="shoppe" width={20} height={20} />
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta Shopee</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor da shopee</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='relative text-[#76889b]'>
                                            <WorkOutlineIcon />
                                            <EditIcon className='absolute text-[#76889b] text-[.7em] right-1/2 top-[1.2em] -translate-y-1/2'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Editar Empresa</p>
                                            <p className='text-sm'>Editar informações da empresa</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='relative text-[red]'>
                                            <WorkOutlineIcon />
                                            <CloseIcon className='absolute text-[red] text-[.7em] right-1/2 top-[1.2em] -translate-y-1/2'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Excluir Empresa</p>
                                            <p className='text-sm'>Remover empresa do sistema</p>
                                        </div>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <table className='w-full border-collapse mt-5'>
                                <thead>
                                    <tr className='text-[#aaa] text-left'>
                                        <th className='pl-3'>ID</th>
                                        <th className='pl-3'>NOME</th>
                                        <th className='pl-3'>MARKETPLACE</th>
                                        <th className='pl-3'>IMPOSTO (%)</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody className='text-center'>
                                    <tr className='pt-3 pb-3'>
                                        <td className='pt-2 pb-2'>
                                            <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#ccc] rounded-l-2xl h-[4em] text-sm text-left pl-3 flex items-center'>
                                                533602951
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                ALFIX SHOP
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                Mercado Livre
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                8%
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-r-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 rounded-r-2xl flex items-center'>
                                                <span className='invisible'>oi</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        

                        {/* Tabela responsiva */}
                        <div className="md:hidden pb-8">
                            <div className="shadow-xl mt-4 rounded-3xl w-[95%] m-auto border-[1px] border-[#f0f0f1]">
                                <div className="w-11/12 m-auto pt-4 pb-4">
                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">ID</h2>
                                        <p className="text-center font-[700] mt-1">533602951</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">NOME</h2>
                                        <p className="text-center mt-1">ALFIX SHOP</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">MARKETPLACE</h2>
                                        <p className="text-center mt-1">Mercado Livre</p>
                                    </div>

                                    <div className="border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">IMPOSTO (%)</h2>
                                        <p className="text-center mt-1">8%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-white mt-6 rounded-lg'>
                    {/* Header */}
                    <div className='w-[97%] m-auto'>
                        <div className='grid items-center justify-between border-b-[1px] border-b-[#ccc] pb-4 md:flex'>
                            <div className='grid gap-2 items-center mt-4 md:mt-0 sm:flex'>
                                <h2 className='text-[#76889b] font-bold'>ALFIX COMERCIO DE ELETRONICO EIRELI</h2>
                                <p className='text-[#777] text-sm'>35.912.838/0001-36</p>
                            </div>
                            <div>
                                <List
                                    component="nav"
                                    aria-label="Device settings"
                                >
                                    <ListItemButton
                                        sx={{ border: "1px solid #ccc" }}
                                        className="bg-[white] w-2/5 md:w-full"
                                        id="lock-button"
                                        aria-haspopup="listbox"
                                        aria-controls="lock-menu"
                                        aria-label="when device is locked"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClickListItem}
                                    >
                                    <ListItemText secondary="Ações" />
                                    {open ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                                    </ListItemButton>
                                </List>
                                <Menu
                                    id="lock-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'lock-button',
                                    role: 'listbox',
                                    }}
                                >
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Image src="/images/amazon_icon.png" alt="amazon" width={20} height={20}/>
                                        </ListItemIcon>
                                        <div className='block'>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta Amazon</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor da amazon</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='flex justify-left'>
                                            <Image src="/images/mercado_livre.jpg" alt="mercado livre" width={40} height={40} className='-translate-x-3'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta meli</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor do Mercado Livre</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Image src="/images/shopee.png" alt="shoppe" width={20} height={20} />
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Adicionar conta Shopee</p>
                                            <p className='text-sm'>Adicionar uma nova conta de vendedor da shopee</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='relative text-[#76889b]'>
                                            <WorkOutlineIcon />
                                            <EditIcon className='absolute text-[#76889b] text-[.7em] right-1/2 top-[1.2em] -translate-y-1/2'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Editar Empresa</p>
                                            <p className='text-sm'>Editar informações da empresa</p>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon className='relative text-[red]'>
                                            <WorkOutlineIcon />
                                            <CloseIcon className='absolute text-[red] text-[.7em] right-1/2 top-[1.2em] -translate-y-1/2'/>
                                        </ListItemIcon>
                                        <div>
                                            <p className='text-[#76889b] font-bold'>Excluir Empresa</p>
                                            <p className='text-sm'>Remover empresa do sistema</p>
                                        </div>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <table className='w-full border-collapse mt-5'>
                                <thead>
                                    <tr className='text-[#aaa] text-left'>
                                        <th className='pl-3'>ID</th>
                                        <th className='pl-3'>NOME</th>
                                        <th className='pl-3'>MARKETPLACE</th>
                                        <th className='pl-3'>IMPOSTO (%)</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody className='text-center'>
                                    <tr className='pt-3 pb-3'>
                                        <td className='pt-2 pb-2'>
                                            <div className='border-t-[1px] border-l-[1px] border-b-[1px] border-[#ccc] rounded-l-2xl h-[4em] text-sm text-left pl-3 flex items-center'>
                                                533602951
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                ALFIX SHOP
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                Mercado Livre
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                8%
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                className=
                                                  'border-t-[1px] w-full border-b-[1px] border-r-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 rounded-r-2xl flex items-center justify-end gap-2'
                                            >
                                                <span className='border-[1px] border-[#ccc] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer'>
                                                    <EditIcon className='text-lg'/>
                                                </span>
                                                <span className='border-[1px] border-[red] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer mr-2'>
                                                    <LogoutIcon className='text-lg text-[red]'/>
                                                </span>
                                                
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='-translate-y-4'>
                                        <td className='pt-2 pb-2'>
                                            <div className='border-t-[1px] border-l-[1px] border-b-[1px] h-[4em] border-[#ccc] rounded-l-2xl pt-4 pb-4 text-sm text-left pl-3 flex items-center'>
                                                533602951
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                ALFIX SHOP
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                Mercado Livre
                                            </div>
                                        </td>
                                        <td>
                                            <div className='border-t-[1px] border-b-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 flex items-center'>
                                                8%
                                            </div>
                                        </td>
                                        <td className='flex justify-end gap-3'>
                                            <div
                                                className=
                                                  'border-t-[1px] w-full border-b-[1px] border-r-[1px] border-[#ccc] h-[4em] text-sm text-left pl-3 rounded-r-2xl translate-y-2 flex items-center justify-end gap-2'
                                            >
                                                <button className='border-[2px] border-[#42b883] pt-2 pb-2 pl-1 pr-1 text-[#42b883] rounded-md'>Vincular Ads</button>
                                                <span className='border-[1px] border-[#ccc] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer'>
                                                    <EditIcon className='text-lg'/>
                                                </span>
                                                <span className='border-[1px] border-[red] rounded-full h-8 w-8 flex items-center justify-center cursor-pointer mr-2'>
                                                    <LogoutIcon className='text-lg text-[red]'/>
                                                </span>
                                                
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        

                        {/* Tabela responsiva */}
                        <div className="md:hidden pb-8">
                            <div className="shadow-xl mt-4 rounded-3xl w-[95%] m-auto border-[1px] border-[#f0f0f1]">
                                <div className="w-11/12 m-auto pt-4 pb-4">
                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">ID</h2>
                                        <p className="text-center font-[700] mt-1">533602951</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">NOME</h2>
                                        <p className="text-center mt-1">ALFIX SHOP</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">MARKETPLACE</h2>
                                        <p className="text-center mt-1">Mercado Livre</p>
                                    </div>

                                    <div className="border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">IMPOSTO (%)</h2>
                                        <p className="text-center mt-1">8%</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">IMPOSTO (%)</h2>
                                        <p className="text-center mt-1">8%</p>
                                    </div>

                                    <div className="border-[#aaa] pt-3 pb-3 flex flex-col justify-center items-center gap-3 sm:flex">
                                        {/* <button className='border-[2px] border-[#42b883] pt-2 pb-2 pl-1 pr-1 text-[#42b883] rounded-md'>Vincular Ads</button> */}
                                        <span className='border-[1px] border-[#ccc] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer sm:w-8 sm:h-8'>
                                            <EditIcon className='text-lg'/>
                                        </span>
                                        <span className='border-[1px] border-[red] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer mr-2 sm:w-8 sm:h-8'>
                                            <LogoutIcon className='text-lg text-[red]'/>
                                        </span>
                                                
                                    </div>
                                </div>
                            </div>


                            <div className="shadow-xl mt-4 rounded-3xl w-[95%] m-auto border-[1px] border-[#f0f0f1]">
                                <div className="w-11/12 m-auto pt-4 pb-4">
                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">ID</h2>
                                        <p className="text-center font-[700] mt-1">533602951</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">NOME</h2>
                                        <p className="text-center mt-1">ALFIX SHOP</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">MARKETPLACE</h2>
                                        <p className="text-center mt-1">Mercado Livre</p>
                                    </div>

                                    <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                        <h2 className="font-bold text-center">IMPOSTO (%)</h2>
                                        <p className="text-center mt-1">8%</p>
                                    </div>

                                    <div className="border-[#aaa] pt-3 pb-3 flex flex-col justify-center items-center gap-3 sm:flex">
                                        <button className='border-[2px] border-[#42b883] pt-2 pb-2 pl-1 pr-1 text-[#42b883] rounded-md'>Vincular Ads</button>
                                        <span className='border-[1px] border-[#ccc] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer sm:w-8 sm:h-8'>
                                            <EditIcon className='text-lg'/>
                                        </span>
                                        <span className='border-[1px] border-[red] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer mr-2 sm:w-8 sm:h-8'>
                                            <LogoutIcon className='text-lg text-[red]'/>
                                        </span>
                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Box>
    )
}