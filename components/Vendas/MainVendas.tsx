import { Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function MainVendas() {

    const getDate = (): string => {
        const today = new Date();
        
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        return `${day}/${month + 1}/${year}`;
    
    };

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: '3.75em' }}>
            <div className='bg-white pt-4'>
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
            </div>

            <div className="pt-10 pb-10 flex relative">
                <button className="bg-[#3fb884] text-white pt-3 pb-3 rounded-3xl w-1/4">
                    <KeyboardArrowDownIcon />
                    <span>Filtros Avançados</span>
                </button>
                <button className="bg-[#e64e28] text-white pt-3 pb-3 rounded-3xl w-1/4 absolute left-1/2 -translate-x-1/2">
                    <WarningAmberIcon />
                    <span>17 Vendas em produtos vinculados</span>
                </button>
            </div>

            <div>
                <div>
                    <div>
                        <label>Status do Pedido</label>
                        <select>
                            <option>Todos</option>
                        </select>
                    </div>

                    <div>
                        <label>Logística</label>
                        <select>
                            <option>Todos</option>
                        </select>
                    </div>

                    <div>
                        <label>ID Do Pedido</label>
                        <input type="text" placeholder="Ex: 123456789"/>
                    </div>

                    <div>
                        <label>SKU Interno</label>
                        <input type="text" placeholder="Ex: ABC123" />
                    </div>

                    <div>
                        <label>SKU Externo</label>
                        <input type="text" placeholder="Ex: ABC123" />
                    </div>
                    
                    <div>
                        <label>Margem Minima</label>
                        <input type="text" placeholder="0" />
                    </div>

                    <div>
                        <label>Margem Máxima</label>
                        <input type="text" placeholder="100" />
                    </div>
                </div>

                <div>
                    <button>Limpar Filtros</button>
                    <button>Filtrar</button>
                </div>
            </div>
        </Box>
    )
}