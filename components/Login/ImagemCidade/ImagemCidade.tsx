import Image from "next/image";

export default function ImagemCidade() {
    return (
        <div 
            className="w-full h-screen bg-no-repeat bg-cover bg-center flex items-center sm:w-1/2"
            style={{
                backgroundImage: 'linear-gradient(to top, rgba(234,53,32,0.4), rgba(228,36,36,0.4)), url("/images/cityDemo.jpg")',
            }}
        >
            <div className="flex flex-col items-center">
                <Image src="/images/Ifinity_white.png" alt="ifinity white" width={400} height={400} />
                <div className="text-white text-center pl-20 pr-20 text-[1.1em]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, est, magnam voluptas laudantium rem saepe harum velit commodi ipsa voluptatibus repellat, qui animi culpa. Accusantium facere excepturi iste ex alias.</p>
                </div>
            </div>
        </div>
    )
}