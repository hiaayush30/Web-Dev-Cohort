import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className='min-h-screen' style={{ backgroundImage: 'url("../../bg.jpeg")', backgroundSize: 'cover' }}>
            <div className='min-h-screen flex flex-col gap-5 justify-center items-center'>
                <div className='bg-blue-100 cursor-pointer p-10 max-md:p-5 rounded-lg shadow-lg hover:shadow-xl transition-all'>
                    <h1 className='text-[80px] text-blue-600 font-bold'>Taskify</h1>
                    <div className='px-5'>Your very own todo manager!</div>
                </div>
                <div className='flex gap-10'>
                    <Button variant='contained'><Link to={'/login'}>Login</Link></Button>
                    <Button variant='contained'><Link to={'/signup'}>Signup</Link></Button>
                </div>
            </div>
        </div>
    )
}

export default Landing
