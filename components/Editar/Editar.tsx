"use client"
import { Box, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


export default function Editar() {
    const [check, setCheck] = useState(false);
    return (
        <Box component="main" className='bg-[#f0f1f0]' sx={{ flexGrow: 1, p: 3, paddingTop: '3.75em', paddingBottom: "3.75em" }}>
            <div className="w-[97%] m-auto grid gap-7">
                <section className="bg-white pt-6 pb-6 rounded-2xl mt-7">
                    <div className="w-[97%] m-auto grid gap-5">
                        <div className="grid gap-1">
                            <label>Empresa</label>
                            <Select
                                displayEmpty
                                IconComponent={KeyboardArrowDownIcon}
                                sx={{
                                    width: "100%",
                                    '& .MuiSelect-icon': {
                                    color: '#4caf50', // Define a cor do ícone normalmente
                                    },
                                    '&.Mui-focused .MuiSelect-icon': {
                                    color: '#4caf50', // Define a cor do ícone quando o Select está focado
                                    },
                                    '&.Mui-disabled .MuiSelect-icon': {
                                    color: '#4caf50', // Define a cor do ícone quando o Select está desabilitado
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #ccc', // Remove a borda
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #ccc', // Remove a borda ao passar o mouse
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #ccc', // Remove a borda quando focado
                                    },
                                }}
                            >
                                <MenuItem selected>Dos</MenuItem>
                            </Select>
                        </div>

                        <div className="grid gap-1">
                            <label>Nome da Conta</label>
                            <input type="text" value="SUPERS" className="w-full border-[1px] border-[#ccc] pt-3 pb-3 pl-3"/>
                        </div>

                        <div className="grid gap-1">
                            <label>ID</label>
                            <input type="text" readOnly value="815790"  className="w-full bg-[#f0f0f1] outline-none text-[#aaa] border-[1px] border-[#ccc] pt-3 pb-3 pl-3"/>
                        </div>

                        <div className="grid gap-1">
                            <label>Marketplace</label>
                            <input type="text" readOnly value="Mercado Livre"  className="w-full bg-[#f0f0f1] outline-none text-[#aaa] border-[1px] border-[#ccc] pt-3 pb-3 pl-3"/>
                        </div>
                        <div className="grid items-center sm:flex">
                            <div
                                className={
                                    `border-[1px] border-[#ccc] transition-all duration-300 h-8 w-[4em] rounded-2xl ml-3 -translate-x-3 cursor-pointer z-0 relative ${check ? "bg-black" : null}`
                                }
                                onClick={() => setCheck((prev) => !prev)}
                            >
                                <div
                                    className={
                                        `h-7 w-7 absolute rounded-full top-1/2 -translate-y-1/2 transition-all duration-300 ${check ? "left-full -translate-x-[100%] border-[1px] border-white" : "left-0 shadow-checkboxShadowBlack"}`
                                    }
                                ></div>
                            </div>
                            <span>Incluir frete no cálculo do imposto</span>
                        </div>
                        <div>
                            <button className="bg-[#4fb788] text-white pt-3 pb-3 pl-9 pr-9 rounded-xl">Salvar</button>
                        </div>
                    </div>
                </section>

                <section className="bg-white pt-6 pb-6 rounded-2xl">
                    <div className="w-[97%] m-auto grid gap-5">
                        <div className="grid gap-1">
                            <label>Aliquota de imposto (%)</label>
                            <input type="text" value="8" className="bg-[#f0f0f1] outline-none text-[#aaa] pl-3 pt-3 pb-3 rounded-3xl"/>
                        </div>
                        <div>
                            <button className="bg-[#4fb788] text-white pt-3 pb-3 pl-9 pr-9 rounded-xl">Alterar aliquota do imposto</button>
                        </div>
                    </div>
                </section>

                <section className="bg-white pt-6 pb-6 rounded-2xl">
                    <div className="grid justify-between items-center gap-2 pl-5 pr-5 sm:flex">
                        <h2 className="text-2xl">Histórico de alteração</h2>
                        <Select
                                displayEmpty
                                IconComponent={KeyboardArrowDownIcon}
                                sx={{
                                    width: "12em",
                                    height: "3em",
                                    
                                    '& .MuiSelect-icon': {
                                    color: '#4caf50', // Define a cor do ícone normalmente
                                    },
                                    '&.Mui-focused .MuiSelect-icon': {
                                    color: '#4caf50', // Define a cor do ícone quando o Select está focado
                                    },
                                    '&.Mui-disabled .MuiSelect-icon': {
                                    color: '#4caf50', // Define a cor do ícone quando o Select está desabilitado
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '1px solid #ccc', // Remove a borda
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #ccc', // Remove a borda ao passar o mouse
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid #ccc', // Remove a borda quando focado
                                    },
                                }}
                            >
                                <MenuItem selected>10 Itens por Pagina</MenuItem>
                            </Select>
                    </div>

                    <div className="grid pt-5 pb-5 w-full gap-12 sm:flex lg:w-1/2">
                        <div className="grid justify-center w-full gap-2 sm:gap-0">
                            <h4 className="text-[#888] text-center">DATA</h4>
                            <p className="">27/12/2023, 14:42:01</p>
                        </div>
                        <div className="grid justify-center w-full gap-2">
                            <h4 className="text-[#888] text-center">ALTERAÇÃO</h4>
                            <p className="text-center">Alterou aliquota para 8% pelo usuário Fernando Barbosa</p>
                        </div>
                    </div>

                    <div className="flex justify-between pl-4 pr-4 items-center">
                        <div>
                            <button className="bg-[#05d79f] h-8 w-8 rounded-full text-white">1</button>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white w-[3.5em] rounded-2xl border-[1px] border-[#ccc]">
                                <ChevronLeftOutlinedIcon className="text-[#05d79f]"/>
                            </button>

                            <button className="bg-white pl-5 pr-5 pt-2 pb-2 rounded-2xl border-[1px] border-[#ccc] sm:pl-3 sm:pr-3">
                                <ChevronRightOutlinedIcon className="text-[#05d79f]"/>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </Box>
    )
}