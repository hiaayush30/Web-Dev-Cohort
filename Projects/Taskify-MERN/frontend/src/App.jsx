import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from './components/AppBar';
import { toast, ToastContainer } from 'react-toastify';
import CardComponent from './components/CardComponent';
function App() {
  const navigate=useNavigate();
  const [user,setUser]=useState('');
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(!token) return navigate('/login');
    try{
      fetch(`${import.meta.env.VITE_API_URL}/user/login`,{
        method:'POST',
        headers:{
          'Content-type':'Application/json',
          'Authorization':token
        }
      }).then(async res=>{
        const data=await res.json();
        if(data.error){
          return navigate('/login');
        }
        setUser(data.username);
      }).catch(err=>{
        console.log(err);
        toast.error('Error retrieving data, please try again later!');
      })
    }catch(err){
      toast.error('something went wrong! please logout and login again')
      console.log(err);
    }
  },[])
  return (
    <div className='transition-all duration-250 text-red-500 text-2xl bg-blue-200 dark:bg-zinc-700 min-h-screen'>
      <ToastContainer/>
      <AppBar/>
      <div className='text-black dark:text-white text-bold text-[42px] m-5 font-serif'>Hello {user}</div>
      <div className='flex gap-14 md:gap-40 justify-center items-center p-10 max-md:flex-col'>
      <CardComponent img={'search.png'} link='/view' title={'View Todos'} desc={'View all your todos'}/>
      <CardComponent img={'create.png'} link='/create' title={'New Todo'} desc={'Create a new todo'}/>
      </div>
    </div>
  )
}

export default App
