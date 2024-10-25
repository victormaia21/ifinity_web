import { Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BoltIcon from '@mui/icons-material/Bolt';
import Image from "next/image";

export default function MainVendas() {

    const getDate = (): string => {
        const today = new Date();
        
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        return `${day}/${month + 1}/${year}`;
    
    };

    const getHours = (): string => {
        const today = new Date();
        const hours = today.getHours();
        const minute = today.getMinutes();
        const seconds = today.getSeconds();

        return `${hours}:${minute}:${seconds}`;
    }

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '3.75em' }}>
            <section className='bg-white pt-4'>
                <p className='pl-2'><span>Acesso Rapido <b>DATA:</b> {getDate()}</span></p>
                <div className='grid gap-2 border-t-[1px] pt-2 pb-6 mt-3 sm:flex sm:justify-between'>
                    <div className='w-full flex justify-center'>
                        <select className='w-[95%] bg-white border-gray-300 border-[1px] pl-2 pt-1 pb-1'>
                            <option>Hoje</option>
                        </select>
                    </div>
                        

                    <div className='w-full flex justify-center'>
                        <select className='w-[95%] bg-white border-gray-300 border-[1px] pl-2 pt-1 pb-1'>
                            <option>Todas - Empresas</option>
                        </select>
                    </div>

                    <div className='w-full flex justify-center'>
                        <select className='w-[95%] bg-white border-gray-300 border-[1px] pl-2 pt-1 pb-1'>
                            <option>Todos - Canais</option>
                        </select>
                    </div>

                    <div className='w-full flex justify-center relative'>
                        <input type="text" placeholder='Digite o SKU' className='w-[95%] bg-white border-gray-300 border-[1px] pl-2 pr-12 pt-1 pb-1'/>
                        <button className='bg-blue-600 text-white pl-2 pr-2 cursor-pointer absolute top-0 right-[2.5%] h-full'>Go!</button>
                    </div>
                </div>
            </section>

            <section className="pt-10 pb-10 flex relative">
                <button className="bg-[#3fb884] text-white pt-3 pb-3 rounded-3xl w-1/4">
                    <KeyboardArrowDownIcon />
                    <span>Filtros Avançados</span>
                </button>
                <button className="bg-[#e64e28] text-white pt-3 pb-3 rounded-3xl w-1/4 absolute left-1/2 -translate-x-1/2">
                    <WarningAmberIcon />
                    <span>17 Vendas em produtos vinculados</span>
                </button>
            </section>

            <section className="bg-white pt-12 pb-12 pl-8 pr-8 rounded-lg">
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col relative">
                        <label>Status do Pedido</label>
                        <select
                            className="bg-white pb-3 pt-3 text-black rounded-2xl pl-8 border-[1px] border-[#dadddd]"
                        >
                            <option>Todos</option>
                        </select>
                        <LocalShippingIcon className="absolute top-9 left-1 text-[#dadddd]"/>
                    </div>

                    <div className="flex flex-col relative">
                        <label>Logística</label>
                        <select className="bg-white pb-3 pt-3 text-black rounded-2xl pl-8 border-[1px] border-[#dadddd]">
                            <option>Todos</option>
                        </select>
                        <LocalShippingIcon className="absolute top-9 left-1 text-[#dadddd]"/>
                    </div>

                    <div className="relative">
                        <label>ID Do Pedido</label>
                        <input type="text" placeholder="Ex: 123456789" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]"/>
                        <CodeOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]" />
                    </div>

                    <div className="relative">
                        <label>SKU Interno</label>
                        <input type="text" placeholder="Ex: ABC123" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]"/>
                        <CodeOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]" />
                    </div>

                    <div className="relative">
                        <label>SKU Externo</label>
                        <input type="text" placeholder="Ex: ABC123" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]"/>
                        <CodeOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]" />
                    </div>
                    
                    <div className="relative">
                        <label>Margem Minima</label>
                        <input type="text" placeholder="0" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]" maxLength={3} />
                        <PercentOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]"/>
                    </div>

                    <div className="relative">
                        <label>Margem Máxima</label>
                        <input type="text" placeholder="100" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]" maxLength={3} />
                        <PercentOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]"/>
                    </div>
                </div>

                <div className="mt-8 flex gap-1">
                    <button className="bg-[#fdecf2] text-[#e0b9c0] w-1/4 pt-3 pb-3 rounded-lg">Limpar Filtros</button>
                    <button className="bg-[#05d69d] w-1/4 pt-3 pb-3 rounded-lg text-white">Filtrar</button>
                </div>
            </section>

            <section className="border-t-[1px] border-t-[#ccc] mt-8">
                <div className="bg-white mt-8 rounded-xl border-b-[1px] border-b-[#ccc]">
                    <div className="flex">
                        <div className="w-1/2 flex pt-3 pb-3 items-center gap-2">
                            <span className="bg-[#80bf83] w-6 h-6 ml-4 rounded-full"></span>
                            <span className="flex items-center">
                                <CalendarTodayOutlinedIcon />
                                <span className="ml-1">{getDate()}</span>
                            </span>
                            <span className="flex items-center">
                                <WatchLaterIcon />
                                <span>{getHours()}</span>
                            </span>
                            <span>
                                <BoltIcon className="text-[#28ab70]"/>
                                <span className="text-[#28ab70] font-bold"><i>FULL</i></span>
                            </span>
                        </div>
                        <div className="w-1/2 flex justify-end items-center pr-4">
                            <Image src="/images/mercado_livre.jpg" alt="mercado livre" width={40} height={40}/>
                            <span>ALFIX SHOP</span>
                        </div>
                    </div>
                </div>
            </section>
        </Box>
    )
}