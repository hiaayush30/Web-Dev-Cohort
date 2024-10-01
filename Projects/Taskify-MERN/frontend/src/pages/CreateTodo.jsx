import { useState } from 'react'
import AppBar from '../components/AppBar'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
const CreateTodo = () => {
  const navigate=useNavigate();
  const [input,setInput]=useState('');
  const handleCreate=()=>{
    const token=localStorage.getItem('token');
        if(!token){
        toast.error('Something went wrong! please login again')    
        setTimeout(()=>{
            return navigate('/login');
        },2000)
        }
        fetch(`${import.meta.env.VITE_API_URL}/todo/create`,{
            method:'POST',
            headers:{
              'Content-type':'Application/json',
              'Authorization':token
            },
            body:JSON.stringify({
              title:input
            })
        }).then(async (res)=>{
            const data=await res.json();
            if(data.error){
              toast.error('Something went wrong! Please try again later!')
              console.log(data.error);
            }else{
              toast.success('Todo added!');
              setInput('');
            }
        }).catch(err=>{
          toast.error('Server down! Please try again later')
        })
  }
  return (
    <div className='min-h-screen bg-blue-200 dark:bg-zinc-700 transition-all duration-250'>
      <AppBar/>
      <ToastContainer/>
      <div className='min-h-96 flex justify-center items-center max-md:pt-20'>
        <div className='flex bg-white p-3 rounded-lg gap-5 max-md:flex-col flex-wrap'>
          <div className='max-h-80 max-w-80'>
            <img className='rounded-lg' src='../../viewTodo.jpg'/>
          </div>
          <div className='flex flex-col justify-around max-md:gap-1'>
            <h1 className='text-[24px] font-semibold text-blue-600'>
              Create a new todo</h1>
            <div className='py-3'>
              <label className='pr-2 font-semibold'>
                Title:</label>
              <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='DSA at 9' className='p-1 bg-blue-200 rounded-lg outline-none'></input>
            </div>
            <div>
              <Button onClick={handleCreate} size='small' variant='contained'>Create</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTodo
