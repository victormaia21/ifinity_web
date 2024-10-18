import { Box, Button } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { products } from '@/public/files/json/products.json';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from "next/image";


export default function Main() {

    const getDate = (): string => {
        const today = new Date();
        
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        return `${day}/${month + 1}/${year}`;
    
    };

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
        <div className='bg-white pt-4'>
        <p className='pl-2'><span>Acesso Rapido <b>DATA:</b> {getDate()}</span></p>
        <div className='flex justify-between border-t-[1px] pt-2 pb-6 mt-3'>
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

            <div className='w-full flex justify-center'>
            <input type="text" placeholder='Digite o SKU' className='w-[80%] bg-white border-gray-300 border-[1px] pl-2 pt-1 pb-1'/>
            <button className='bg-blue-600 text-white pl-2 pr-2 cursor-pointer'>Go!</button>
            </div>
        </div>
        </div>

        {/* Lucros */}
        <div>
        {/* Lucros colorido */}
            <div className='flex justify-between gap-2'>

                <div className='bg-[#007aff] w-[80%] text-center pt-3 pb-3 text-white rounded-lg'>
                    <p>Faturamento</p>
                    <h1 className='font-bold mt-1'>R$ 99.196,24</h1>
                </div>

                <div className='bg-[#29a744] w-[80%] text-center pt-3 pb-3 text-white rounded-lg'>
                    <p>Liq. do Marketplace</p>
                    <h1 className='font-bold mt-1'>R$ 80.789,64</h1>
                </div>

                <div className='bg-[#6c757e] w-[80%] text-center pt-3 pb-3 text-white rounded-lg'>
                    <p>Lucro Bruto</p>
                    <h1 className='font-bold mt-1'>R$ 7.268,93</h1>
                </div>

                <div className='bg-[#353a40] w-[80%] text-center pt-3 pb-3 text-white rounded-lg'>
                    <p>Margem</p>
                    <h1 className='font-bold mt-1'>7,33%</h1>
                </div>
            </div>


        {/* Lucros em branco */}
        <div className='grid grid-cols-container_values gap-2 mt-6 border-[#ccc] border-t-[1px] pt-6'>
            <div className='bg-white text-center pt-3 pb-3 text-black border-[#ddd] border-[1px] border-solid'>
                <p>Número de Vendas</p>
                <h1 className='mt-1'>177</h1>
            </div>

            <div className='bg-white text-center pt-3 pb-3 text-black border-[#ddd] border-[1px] border-solid'>
                <p>Unidade Vendidas</p>
                <h1 className='mt-1'>775</h1>
            </div>

            <div className='bg-white text-center pt-3 pb-3 text-black border-[#ddd] border-[1px] border-solid'>
                <p>Ticket Medio</p>
                <h1 className='mt-1'>R$ 144,99</h1>
            </div>

            <div className='bg-white text-center pt-3 pb-3 text-black border-[#ddd] border-[1px] border-solid'>
                <p>Retorno Sobre Investimento</p>
                <h1 className='mt-1'>10,91%</h1>
            </div>

            <div className='bg-white text-center pt-3 pb-3 text-black border-[#ddd] border-[1px] border-solid'>
                <p>Valor em Ads</p>
                <h1 className='mt-1'>R$ 0,00</h1>
            </div>

            <div className='bg-white text-center pt-3 pb-3 text-black border-[#ddd] border-[1px] border-solid'>
                <p>TACOS</p>
                <h1 className='mt-1'>0%</h1>
            </div>

            <div className='bg-white text-center pt-3 pb-3 text-black border-[#ddd] border-[1px] border-solid'>
                <p>Lucro bruto pós ADS</p>
                <h1 className='mt-1'>R$ 8.086,48</h1>
            </div>

            

            <div className='bg-white text-center pt-3 pb-3 text-black border-[#ddd] border-[1px] border-solid'>
                <p>MPA</p>
                <h1 className='mt-1'>7,22%</h1>
            </div>
        </div>

        </div>

        <div className="border-[1px] border-t-[#ccc] mt-7 pb-5">
            <div className="flex justify-center">
                <KeyboardArrowUpIcon />
            </div>

            <div>
                <h2 className="font-bold">Top 15 produtos vendidos</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="border-collapse w-full overflow-auto">
                    <thead>
                        <tr className="text-center text-[#aaa] text-[.75em]">
                            <th className="pt-5 pb-3">PRODUTO</th>
                            <th>PREÇO MÉDIO</th>
                            <th>CUSTO UNITÁRIO MÉDIO</th>
                            <th>UNIDADES VENDIDAS TOTAIS</th>
                            <th>TOTAL FATURADO</th>
                            <th>REPRESENT</th>
                            <th>LUCRO</th>
                            <th>MARGEM</th>
                            <th>CUSTO ADS</th>
                            <th>LUCRO PÓS ADS</th>
                            <th>MPA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 && products.map((product) => (
                            <tr key={product.id} className="border-[#f0f0f0] border-solid border-t-[7px] text-center h-[2em]">
                                <td className="bg-white flex items-center">
                                    <Image src={"/" + product.imagem} alt={product.nome} width={60} height={60}/>
                                    <p className="ml-1 pl-12 pr-12">{product.nome}</p>
                                </td>
                                <td className="bg-white mt-[1em] font-[600]">{product.preco_medio}</td>
                                <td className="bg-white mt-[1em]">{product.custo_unitario_medio}</td>
                                <td className="bg-white mt-[1em]">{product.unidades_vendidas_totais}</td>
                                <td className="bg-white mt-[1em]">{product.total_faturado}</td>
                                <td className="bg-white mt-[1em]">{product.represent}</td>
                                <td className="bg-white mt-[1em]">{product.lucro}</td>
                                <td className="bg-white mt-[1em]">
                                    <span className={`${colorMargenAndMpa(product.margem)} pt-2 pb-2 pl-1 pr-1 rounded-[30px] text-white`}>
                                        {product.margem}%
                                    </span>
                                </td>
                                <td className="bg-white mt-[1em]">{product.custo_ads}</td>
                                <td className="bg-white mt-[1em]">{product.lucro_pos_ads}</td>
                                <td className="bg-white mt-[1em] pr-2">{product.margem}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="pt-2 pb-12">
            <Button
                variant="outlined"
                sx={{
                    width: '100%',
                    marginTop: '1em',
                    border: '1px solid #f0f0f0',
                    background: 'white',
                    textTransform: 'none',
                    color: 'black',
                    padding: '1em 0'
                }}
                startIcon={<ArrowDownwardIcon />}
            >
                Ver todos os meus produtos
            </Button>
        </div>
    </Box>
  )
}