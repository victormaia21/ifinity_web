"use client"
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function FormMidia() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const changeTextPassowrd = () => setPasswordVisible((pass) => !pass);
    return (
        <section className='w-full sm:w-1/2'>
            <div className='w-[75%] ml-auto mr-auto pt-[5em] pb-[5em]'>
                <div className='flex justify-center'>
                    <Image src='/images/ifiniti.png' alt='welcome ifinity' width={500} height={500}/>
                </div>
                <p className='text-[#aaa] text-[1.3em] text-center mt-3'>Log in to get in the moment updates on the things that interest you</p>
                <form className='mt-[2em]'>
                    <div className='relative'>
                        <span className='absolute left-2 top-1'>
                            <PersonOutlineIcon className='text-[2.5em] text-[#aaa]'/>
                        </span>
                        <input
                            type="text" 
                            placeholder="Username"
                            className="w-full border-[1px] border-[#aaa] text-[1.4em] pt-2 pb-2 rounded-[30px] p-14 focus: outline-none"
                        />
                    </div>
                    <div className='relative mt-2'>
                        <span className='absolute left-2 mt-1'>
                            <LockOutlinedIcon className='text-[2.5em] text-[#aaa]'/>
                        </span>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder='Password'
                            className="w-full border-[1px] border-[#aaa] text-[1.4em] pt-2 pb-2 rounded-[30px] p-14 focus: outline-none"
                        />
                        <span className='absolute right-2 mt-1 cursor-pointer' onClick={() => changeTextPassowrd()}>
                            <HelpOutlineRoundedIcon className='text-[2.5em] text-[#aaa]'/>
                        </span>
                    </div>
                    <div className='mt-5'>
                        <button
                             type='submit'
                             className=
                               'bg-gradient-to-t from-[#ea3520] to-[#e42424] w-full text-white font-bold text-[1.4em] pt-2 pb-2 rounded-[30px]'
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>

                <div className='text-center'>
                    <p className='mt-3 text-[#555]'>
                        {"Dont't"} have an account ? <Link href="*" className='text-[#ea3520] font-bold'>Sign Up Now</Link>
                    </p>
                    <div className='text-[#555] border-t-[1px] border-t-[#999] mt-10 relative'>
                        <span className='absolute left-1/2 bg-white pl-3 pr-3 transform translate-y-[-.75em] translate-x-[-50%]'>Or</span>
                    </div>
                    <div className='mt-10'>
                        <p className='text-[#555] text-[1.1em]'>Continue with social média</p>

                        <div className='mt-5 flex justify-center'>
                            <Link href="*" className='flex items-center justify-center h-[4em] w-[4em] rounded-[50%] shadow-customIcons ml-3 mr-3'>
                                <FacebookIcon className='text-[2.5em] text-blue-700'/>
                            </Link>

                            <Link href="*" className='flex items-center justify-center h-[4em] w-[4em] rounded-[50%] shadow-customIcons ml-3 mr-3'>
                                <XIcon className='text-[2em]' />
                            </Link>

                            <Link href="*" className='flex items-center justify-center h-[4em] w-[4em] rounded-[50%] shadow-customIcons ml-3 mr-3'>
                                <GoogleIcon className='text-[2em] text-[#cc4b2f]' />
                            </Link>

                            <Link href="*" className='flex items-center justify-center h-[4em] w-[4em] rounded-[50%] shadow-customIcons ml-3 mr-3'>
                                <LinkedInIcon className='text-[2.5em] text-blue-700' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}