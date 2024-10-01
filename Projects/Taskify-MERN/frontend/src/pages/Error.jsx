import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
const Error = () => {
    const bgImage = '../../penguin.jpg'
    return (
        <div
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
            className='opacity-80'>
            <div className='min-h-screen flex flex-col items-center'>
                <div className='text-[80px] text-blue-600'>
                    404</div>
                <Button variant='contained' color='error'>
                    <Link to={'/home'}>
                        Go Back
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Error
