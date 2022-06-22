import React from 'react'

const About = () => {
    return (
        <div className=' w-full m:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[]'>About</p>
                    <h2 className='py-4 text-black'>Who I Am.</h2>
                    <p className='py-2 text-gray-400'>Description of who I am.</p>
                    <p className='py-4 text-gray-600 underline cursor-pointer'>Check out some of my projects.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-lg shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-duration-300'>
                    <img className='rounded-xl' src='https://i.imgur.com/xnLT6jQ.jpg' alt="Me" width='600' height='600'/ >
                </div>
            </div>            
        </div>
    )
}

export default About
