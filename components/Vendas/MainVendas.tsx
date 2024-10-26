import { Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import BoltIcon from '@mui/icons-material/Bolt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import PercentIcon from '@mui/icons-material/Percent';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
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

    const colorMargenAndMpa = (porc: number) => {
        if (porc > 5) {
            return "bg-[#9ce28f]"
        } else if (porc > 3) {
            return "bg-[#f6da6b]"
        } else {
            return "bg-[#fead89]"
        }
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

        <section className="pt-12 pb-12 rounded-lg]">
                <div className="grid grid-cols-1 gap-4">
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

                    <div className="flex flex-col relative">
                        <label>ID Do Pedido</label>
                        <input type="text" placeholder="Ex: 123456789" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]"/>
                        <CodeOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]" />
                    </div>

                    <div className="flex flex-col relative">
                        <label>SKU Interno</label>
                        <input type="text" placeholder="Ex: ABC123" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]"/>
                        <CodeOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]" />
                    </div>

                    <div className="flex flex-col relative">
                        <label>SKU Externo</label>
                        <input type="text" placeholder="Ex: ABC123" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]"/>
                        <CodeOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]" />
                    </div>
                    
                    <div className="flex flex-col relative">
                        <label>Margem Minima</label>
                        <input type="text" placeholder="0" className="pl-8 pt-3 pb-3 rounded-2xl border-[1px] border-[#dadddd]" maxLength={3} />
                        <PercentOutlinedIcon className="absolute top-9 left-1 text-[#dadddd]"/>
                    </div>

                    <div className="flex flex-col relative">
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
                    <div className="grid justify-center sm:flex sm:justify-between">
                        <div className="grid grid-cols-2 justify-start w-1/2 pt-3 pb-3 items-center gap-9 ml-10 sm:flex sm:ml-0 sm:gap-2">
                            <span className="bg-[#80bf83] w-6 h-6 ml-4 rounded-full"></span>
                            <span className="flex items-center">
                                <CalendarTodayOutlinedIcon />
                                <span className="ml-1">{getDate()}</span>
                            </span>
                            <span className="flex items-center">
                                <WatchLaterIcon />
                                <span>{getHours()}</span>
                            </span>
                            <span className="flex">
                                <BoltIcon className="text-[#28ab70]"/>
                                <span className="text-[#28ab70] font-bold"><i>FULL</i></span>
                            </span>
                        </div>
                        <div className="flex justify-center items-center pr-4">
                            <Image src="/images/mercado_livre.jpg" alt="mercado livre" width={40} height={40}/>
                            <span>ALFIX SHOP</span>
                        </div>
                    </div>
                    <div className="hidden border-t-[#ccc] border-t-[1px]">
                        <table className="border-collapse w-[95%] m-auto">
                            <thead>
                                <tr className="text-[#777] text-sm h-[6em]">
                                    <th className="font-normal pl-2 text-left">ITEM</th>
                                    <th className="font-normal pl-2">QTD</th>
                                    <th className="font-normal pl-2">TOTAL</th>
                                    <th className="font-normal pl-2">PREÇO UNIT.</th>
                                    <th className="font-normal pl-2">LIQUIDO DO MARKETPLACE</th>
                                    <th className="font-normal pl-2">IMPOSTO</th>
                                    <th className="font-normal pl-2">CUSTO DO PRODUTO</th>
                                    <th className="font-normal pl-2">CUSTO EXTRA</th>
                                    <th className="font-normal pl-2">LUCRO</th>
                                    <th className="font-normal pl-2">MARGEM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-sm">
                                    <td className="flex pl-2 pr-2 pt-3 pb-3 rounded-l-2xl border-t-[1px] border-l-[1px] border-b-[1px] border-[#ccc]">
                                        <Image src="/images/products/frigideira_7.webp" alt="frigideira" width={50} height={50}/>
                                        <article>
                                            <h3 className="font-bold">Frigideira Tramontina Inox C/ Tampa Corpo Triplo Grano 30cm</h3>
                                            <p className="text-[#555]">SKU Externo: 12576</p>
                                        </article>
                                    </td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">1</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 444,99</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 444,99</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 382,70</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 35,60</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 315,66</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">-</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 31,44</td>
                                    <td className="text-center rounded-r-2xl border-t-[1px] border-r-[1px] border-b-[1px] border-[#ccc] p3-4">
                                        <span className="bg-[#fed873] pl-3 pr-3 pt-1 pb-1 text-white rounded-2xl">7,07%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="tableResponsive:hidden">
                        <div className="bg-white mt-4 rounded-3xl">
                            <div className="w-11/12 m-auto pt-4 pb-4">
                                <div className="border-b-[1px] border-[#aaa]">
                                    <h2 className="font-bold text-center">ITEM</h2>
                                    <div className="grid items-center text-center gap-3 cardHeaderResponsive:flex">
                                        <div className="flex justify-center">
                                            <Image src="/images/products/frigideira_7.webp" alt="frigideira" width={180} height={180} />
                                        </div>
                                        <p className="ml-1 pl-12 pr-12">Frigideira Tramontina Inox C/ Tampa Corpo Triplo Grano 30cm</p>
                                        <p className="ml-1 pl-12 pr-12">SKU Externo: 12576</p>
                                    </div>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">QTD</h2>
                                    <p className="text-center font-[700] mt-1">1</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">TOTAL</h2>
                                    <p className="text-center mt-1">R$ 444,99</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">PREÇO UNITARIO</h2>
                                    <p className="text-center mt-1">R$ 444,99</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">LIQUIDO DO MARKETPLACE</h2>
                                    <p className="text-center mt-1">R$ 382,70</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">IMPOSTO</h2>
                                    <p className="text-center mt-1">R$ 35,60</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">CUSTO DO PRODUTO</h2>
                                    <p className="text-center mt-1">R$ 315,66</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">CUSTO EXTRA</h2>
                                    <p className={`text-center mt-1`}>-</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">LUCRO</h2>
                                    <p className="text-center mt-1">R$ 31,44</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">MARGEM</h2>
                                    <p className={`text-center mt-1 w-1/4 m-auto rounded-xl ${colorMargenAndMpa(7.87)}`}>7.87%</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="border-t-[1px] border-t-[#ccc] w-[95%] mt-4 ml-auto mr-auto">
                        <div className="flex mt-10">
                            {/* Article desta section */}
                            <div className="grid grid-cols-2 grid-rows-none h-1 w-4/6 gap-3 pl-6 pr-6">
                                <div className="border-[1px] border-black text-center pt-3 pb-3 rounded-2xl">
                                    <h2 className="font-bold">Data de criação</h2>
                                    <p className="mt-2">15/10/2024 13:22:52</p>
                                </div>
                                <div className="border-[1px] border-black text-center pt-3 pb-3 rounded-2xl">
                                    <h2>Data de aprovação</h2>
                                    <p>15/10/2024 13:22:56</p>
                                </div>


                                <div className="border-[1px] border-black text-center pt-3 pb-3 rounded-2xl col-span-full">
                                <span className="flex justify-center">
                                        <h2 className="font-bold">ID do pedido:</h2>
                                        <p>200000000000391283192381</p>
                                </span>
                                <span className="flex justify-center">
                                        <h2 className="font-bold">Item MeLi ID:</h2>
                                        <p>36742394024239</p>
                                </span>
                                </div>


                            </div>

                            <div className="w-2/6 pb-3">
                                <div className="border-l-[1px] border-l-[#ccc]">
                                    <div className="grid justify-center gap-4 border-b-[1px] border-b-[#ccc] pb-6 w-[80%] m-auto">
                                        {/* pedidos, impostos e etc */}
                                        <div className="flex justify-between items-center">
                                            <div>
                                                {/* Icone */}
                                                <span className="bg-[#def6de] p-2 rounded-full">
                                                    <ShoppingCartIcon className="text-[#29ddaa] h-12 w-6 rounded-full" />
                                                </span>
                                                <span className="ml-3 text-[.9em]">Total do Pedido</span>
                                            </div>
                                            <div>
                                                <span className="text-[#29ddaa] font-bold text-[.9em]">+R$ 444.99</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div className="flex gap-3">
                                                {/* Icone */}
                                                <span className="bg-[#fce8ec] p-2 rounded-full">
                                                    <InventoryIcon className="text-[#f86b91]"/>
                                                </span>
                                                <div className="grid">
                                                    <span className="text-[.9em]">Valor do Frete</span>
                                                    <span className="text-[.9em]">Pago pelo vendedor</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-[#fb2a5f] text-[.9em]">-R$ 25.95</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                {/* Icone */}
                                                <span className="bg-[#fce8ec] p-2 rounded-full">
                                                    <PercentIcon className="text-[#f86b91]" />
                                                </span>
                                                <span className="text-[.9em]">Comissão</span>
                                            </div>
                                            <div>
                                                <span className="text-[#fb2a5f] text-[.9em]">-R$ 36.34</span>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center gap-3">
                                            <div className="flex gap-3">
                                                {/* Icone */}
                                                <span className="bg-[#fce8ec] p-2 rounded-full">
                                                    <PointOfSaleIcon className="text-[#f86b91]"/>
                                                </span>
                                                <div className="grid">
                                                    <span className="text-[.9em]">Taxa Mercado Livre</span>
                                                    <span className="text-[.9em]">Preço menor que R$79.99</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-[#fb2a5f] text-[.9em]">-R$ 0.00</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-between items-center gap-3">
                                            <div className="flex gap-3 items-center">
                                                {/* Icone */}
                                                <span className="bg-[#fce8ec] p-2 rounded-full">
                                                    <ReceiptIcon className="text-[#fb2a5f]" />
                                                </span>
                                                <span className="text-[.9em]">Imposto</span>
                                            </div>
                                            <div>
                                                <span className="text-[#fb2a5f] text-[.9em]">-R$ 35.60</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-between items-center gap-3">
                                            <div className="flex gap-3 items-center">
                                                {/* Icone */}
                                                <span className="bg-[#fce8ec] p-2 rounded-full">
                                                    <ShoppingBasketIcon className="text-[#fb2a5f]" />
                                                </span>
                                                <span>Imposto</span>
                                            </div>
                                            <div>
                                                <span className="text-[#fb2a5f] text-[.9em]">-R$ 35.60</span>
                                            </div>
                                        </div>
                                        <div className="text-center text-[#eeb19e] cursor-pointer hover:underline">
                                            <span>+ Adicionar custo eventual</span>
                                        </div>
                                    </div>

                                    <div className="w-[80%] m-auto">
                                        <div className="flex items-center justify-between pt-8">
                                            <div className="flex items-center gap-3">
                                                {/* Icone */}
                                                <span className="bg-[#def6de] p-2 rounded-full">
                                                    <LocalAtmIcon className="text-[#7fd2af]"/>
                                                </span>
                                                <span className="text-[.9em]">Lucro do pedido</span>
                                            </div>
                                            <div>
                                                <span className="text-[#29ddaa] font-bold text-[.9em]">R$ 31.44</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t-[1px] border-t-[#ccc] mt-8">
                <div className="bg-white mt-8 rounded-xl border-b-[1px] border-b-[#ccc] pb-12">
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
                    <div className="border-t-[#ccc] border-t-[1px]">
                        <table className="border-collapse w-[95%] m-auto hidden border-t-[#ccc] border-t-[1px] tableResponsive:block">
                            <thead>
                                <tr className="text-[#777] text-sm h-[6em]">
                                    <th className="font-normal pl-2 text-left">ITEM</th>
                                    <th className="font-normal pl-2">QTD</th>
                                    <th className="font-normal pl-2">TOTAL</th>
                                    <th className="font-normal pl-2">PREÇO UNIT.</th>
                                    <th className="font-normal pl-2">LIQUIDO DO MARKETPLACE</th>
                                    <th className="font-normal pl-2">IMPOSTO</th>
                                    <th className="font-normal pl-2">CUSTO DO PRODUTO</th>
                                    <th className="font-normal pl-2">CUSTO EXTRA</th>
                                    <th className="font-normal pl-2">LUCRO</th>
                                    <th className="font-normal pl-2">MARGEM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-sm">
                                    <td className="flex pl-2 pr-2 pt-3 pb-3 rounded-l-2xl border-t-[1px] border-l-[1px] border-b-[1px] border-[#ccc]">
                                        <Image src="/images/products/frigideira_7.webp" alt="frigideira" width={50} height={50}/>
                                        <article>
                                            <h3 className="font-bold">Frigideira Tramontina Inox C/ Tampa Corpo Triplo Grano 30cm</h3>
                                            <p className="text-[#555]">SKU Externo: 12576</p>
                                        </article>
                                    </td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">1</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 444,99</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 444,99</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 382,70</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 35,60</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 315,66</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">-</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 31,44</td>
                                    <td className="text-center rounded-r-2xl border-t-[1px] border-r-[1px] border-b-[1px] border-[#ccc] p3-4">
                                        <span className="bg-[#fed873] pl-3 pr-3 pt-1 pb-1 text-white rounded-2xl">7,07%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="tableResponsive:hidden">
                        <div className="bg-white mt-4 rounded-3xl">
                            <div className="w-11/12 m-auto pt-4 pb-4">
                                <div className="border-b-[1px] border-[#aaa]">
                                <h2 className="font-bold text-center">ITEM</h2>
                                    <div className="flex items-center gap-3">
                                        <Image src="/images/products/frigideira_7.webp" alt="frigideira" width={180} height={180}/>
                                        <p className="ml-1 pl-12 pr-12">Frigideira Tramontina Inox C/ Tampa Corpo Triplo Grano 30cm</p>
                                        <p className="ml-1 pl-12 pr-12">SKU Externo: 12576</p>
                                    </div>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">QTD</h2>
                                    <p className="text-center font-[700] mt-1">1</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">TOTAL</h2>
                                    <p className="text-center mt-1">R$ 444,99</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">PREÇO UNITARIO</h2>
                                    <p className="text-center mt-1">R$ 444,99</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">LIQUIDO DO MARKETPLACE</h2>
                                    <p className="text-center mt-1">R$ 382,70</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">IMPOSTO</h2>
                                    <p className="text-center mt-1">R$ 35,60</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">CUSTO DO PRODUTO</h2>
                                    <p className="text-center mt-1">R$ 315,66</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">CUSTO EXTRA</h2>
                                    <p className={`text-center mt-1`}>-</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">LUCRO</h2>
                                    <p className="text-center mt-1">R$ 31,44</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">MARGEM</h2>
                                    <p className={`text-center mt-1 w-1/4 m-auto rounded-xl ${colorMargenAndMpa(7.87)}`}>7.87%</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="mt-6"/>
                </div>
            </section>

            <section className="border-t-[1px] border-t-[#ccc] mt-8">
                <div className="bg-white mt-8 rounded-xl border-b-[1px] border-b-[#ccc] pb-12">
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
                    <div className="hidden w-full border-t-[#ccc] border-t-[1px] tableResponsive:block">
                        <table className="border-collapse w-[95%] m-auto">
                            <thead>
                                <tr className="text-[#777] text-sm h-[6em]">
                                    <th className="font-normal pl-2 text-left">ITEM</th>
                                    <th className="font-normal pl-2">QTD</th>
                                    <th className="font-normal pl-2">TOTAL</th>
                                    <th className="font-normal pl-2">PREÇO UNIT.</th>
                                    <th className="font-normal pl-2">LIQUIDO DO MARKETPLACE</th>
                                    <th className="font-normal pl-2">IMPOSTO</th>
                                    <th className="font-normal pl-2">CUSTO DO PRODUTO</th>
                                    <th className="font-normal pl-2">CUSTO EXTRA</th>
                                    <th className="font-normal pl-2">LUCRO</th>
                                    <th className="font-normal pl-2">MARGEM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-sm">
                                    <td className="flex pl-2 pr-2 pt-3 pb-3 rounded-l-2xl border-t-[1px] border-l-[1px] border-b-[1px] border-[#ccc]">
                                        <Image src="/images/products/frigideira_7.webp" alt="frigideira" width={50} height={50}/>
                                        <article>
                                            <h3 className="font-bold">Frigideira Tramontina Inox C/ Tampa Corpo Triplo Grano 30cm</h3>
                                            <p className="text-[#555]">SKU Externo: 12576</p>
                                        </article>
                                    </td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">1</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 444,99</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 444,99</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 382,70</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 35,60</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 315,66</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">-</td>
                                    <td className="text-center border-t-[1px] border-b-[1px] border-[#ccc]">R$ 31,44</td>
                                    <td className="text-center rounded-r-2xl border-t-[1px] border-r-[1px] border-b-[1px] border-[#ccc] p3-4">
                                        <span className="bg-[#fed873] pl-3 pr-3 pt-1 pb-1 text-white rounded-2xl">7,07%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className="tableResponsive:hidden">
                        <div className="bg-white mt-4 rounded-3xl">
                            <div className="w-11/12 m-auto pt-4 pb-4">
                                <div className="border-b-[1px] border-[#aaa]">
                                <h2 className="font-bold text-center">ITEM</h2>
                                    <div className="flex items-center gap-3">
                                        <Image src="/images/products/frigideira_7.webp" alt="frigideira" width={180} height={180}/>
                                        <p className="ml-1 pl-12 pr-12">Frigideira Tramontina Inox C/ Tampa Corpo Triplo Grano 30cm</p>
                                        <p className="ml-1 pl-12 pr-12">SKU Externo: 12576</p>
                                    </div>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">QTD</h2>
                                    <p className="text-center font-[700] mt-1">1</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">TOTAL</h2>
                                    <p className="text-center mt-1">R$ 444,99</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">PREÇO UNITARIO</h2>
                                    <p className="text-center mt-1">R$ 444,99</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">LIQUIDO DO MARKETPLACE</h2>
                                    <p className="text-center mt-1">R$ 382,70</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">IMPOSTO</h2>
                                    <p className="text-center mt-1">R$ 35,60</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">CUSTO DO PRODUTO</h2>
                                    <p className="text-center mt-1">R$ 315,66</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">CUSTO EXTRA</h2>
                                    <p className={`text-center mt-1`}>-</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">LUCRO</h2>
                                    <p className="text-center mt-1">R$ 31,44</p>
                                </div>

                                <div className="border-b-[1px] border-[#aaa] pt-3 pb-3">
                                    <h2 className="font-bold text-center">MARGEM</h2>
                                    <p className={`text-center mt-1 w-1/4 m-auto rounded-xl ${colorMargenAndMpa(7.87)}`}>7.87%</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="mt-6"/>
                </div>
            </section>

            <div className="flex justify-between mt-8">
                <div className="flex gap-2">
                    <button className="bg-[#05d79f] h-8 w-8 rounded-full text-white">1</button>
                    <button className="h-8 w-8 rounded-full border-[1px] border-[#ccc] bg-[#fff7f7]">2</button>
                    <button className="h-8 w-8 rounded-full border-[1px] border-[#ccc] bg-[#fff7f7]">3</button>
                    <button className="h-8 w-8 rounded-full border-[1px] border-[#ccc] bg-[#fff7f7]">4</button>
                    <button className="h-8 w-8 rounded-full border-[1px] border-[#ccc] bg-[#fff7f7]">5</button>
                    <button className="h-8 w-8 rounded-full border-[1px] border-[#ccc] bg-[#fff7f7]">6</button>
                    <span>...</span>
                    <button className="h-8 w-8 rounded-full border-[1px] border-[#ccc] bg-[#fff7f7]">16</button>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white pl-3 pr-3 rounded-2xl border-[1px] border-[#ccc]">
                        <ChevronLeftOutlinedIcon className="text-[#05d79f]"/>
                    </button>

                    <button className="bg-white pl-3 pr-3 rounded-2xl border-[1px] border-[#ccc]">
                        <ChevronRightOutlinedIcon className="text-[#05d79f]"/>
                    </button>
                </div>
            </div>
        </Box>
    )
}