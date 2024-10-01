import {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(token){
        fetch(`${import.meta.env.VITE_API_URL}/user/login`,{
            method:'POST',
            headers:{
              'Content-type':'Application/json',
              'Authorization':token
            }
          }).then(async res=>{
            const data=await res.json();
            if(!data.error){
              return navigate('/home');
            }
          })
    }
 },[])
 const handleSubmit=()=>{
    if(username.trim().length == 0 || password.trim().length==0){
        toast.error('username or password cannot be empty');
    }
    else{
        try{
            fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json', // Specify that you're sending JSON
                },
                body: JSON.stringify({
                  username,
                  password
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
        <ToastContainer/>
            <form className='min-h-screen flex flex-col flex-wrap justify-center items-center'>
                <div className='shadow-xl border bg-white rounded-lg flex flex-col gap-5 justify-center items-center p-5'>
                    <div onClick={()=>navigate('/')}
                    className='text-[60px] text-blue-500 font-bold hover:scale-110 cursor-pointer transition-all'>
                        Taskify
                        </div>
                <div className='p-2'>
                    <label>username:</label>
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} type='text' className='bg-blue-200 p-1 rounded-lg mx-3 text-black outline-none'></input>
                </div>
                <div className='p-2'>
                    <label>password:</label>
                    <input onChange={(e)=>setPassword(e.target.value
                    )} value={password} type='password' className='bg-blue-200 p-1 rounded-lg mx-3 text-black outline-none'></input>
                </div>
                <div className='m-3'>
                <Button onClick={handleSubmit} variant='contained'>Login</Button>
                </div>
                <div > don&apos;t have an account? <Link to={'/signup'} className='text-blue-500'
                >Signup</Link></div>
                </div>
            </form>
        </div>
  )
}

export default Login
