import { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    useEffect(()=>{
       const token=localStorage.getItem('token');
       if(token){
        navigate('/home');
       }
    },[])
    const handleSubmit=()=>{
        if(username.trim().length <=3 || password.trim().length<=3){
            return toast.error('username or password should not be less than 4 characters');
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email)){
             return toast.error('Invalid email!');
        }
        else{
            try{
                fetch(`${import.meta.env.VITE_API_URL}/user/signup`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json', // Specify that you're sending JSON
                    },
                    body: JSON.stringify({
                      username,
                      password,
                      email
                    })}).then(async res => {
                        const data = await res.json()
                        if(data.error){
                            toast.error(data.error);
                        }else{
                            const token = res.headers.get('Authorization');
                            localStorage.setItem('token',token)
                            toast.success(data.message,{
                                position:'top-center',
                                autoClose:1000
                            })
                            setTimeout(()=>{
                                navigate('/home')
                            },1000)
                        }
                })
            }catch(err){
                console.log(err);
            }
        }
    }
    return (
        <div className='bg-blue-300 min-h-screen'>
            <ToastContainer />
            <form className='min-h-screen flex flex-col flex-wrap justify-center items-center'>
                <div className='shadow-xl border bg-white rounded-lg flex flex-col gap-5 justify-center items-center p-5'>
                    <div onClick={()=>navigate('/')}
                    className='text-[60px] text-blue-500 hover:scale-110 font-bold cursor-pointer transition-all'>
                        Taskify
                        </div>
                <div className='p-2'>
                    <label>username:</label>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} type='text' className='bg-blue-200 p-1 rounded-lg mx-3 text-black outline-none'></input>
                </div>
                <div className='p-2 flex justify-center items-center max-md:gap-6 md:gap-7'>
                    <label>email:</label>
                    <input onChange={(e)=>setEmail(e.target.value)} required value={email} type='email' className='bg-blue-200 p-1 rounded-lg mx-3 text-black outline-none'></input>
                </div>
                <div className='p-2'>
                    <label>password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' className='bg-blue-200 p-1 rounded-lg mx-3 text-black outline-none'></input>
                </div>
                <div className='m-3'>
                <Button onClick={handleSubmit} variant='contained'>Signup</Button>
                </div>
                <div >have an account? <Link to={'/login'} className='text-blue-500'
                >Login</Link></div>
                </div>
            </form>
        </div>
    )
}

export default Signup
