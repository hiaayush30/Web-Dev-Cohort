import  { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Todo from '../components/Todo'
import { toast, ToastContainer } from 'react-toastify'
const ViewTodos = () => {
    const navigate=useNavigate();
    const [todos,setTodos]=useState([]);
    useEffect(()=>{
      refreshTodos();
    },[])
    const refreshTodos=()=>{
        const token=localStorage.getItem('token');
        if(!token){
        toast.error('Something went wrong! please login again')    
        setTimeout(()=>{
            return navigate('/login');
        },2000)
        }
        fetch(`${import.meta.env.VITE_API_URL}/todo/todos`,{
            method:'GET',
            headers:{
              'Content-type':'Application/json',
              'Authorization':token
            }
        }).then(async (res)=>{
            if(res.ok){
            const data=await res.json();
            setTodos(data.todos);
            }else{
                toast.error('Could not fetch your todos! please try again later')
            }
        }).catch((err)=>{
            toast.error('Internal server error!');
            console.log(err);
        })
    }

    const handleDone=(todo)=>{
        const token=localStorage.getItem('token');
        if(!token){
        toast.error('Something went wrong! Please login to try again')
        setTimeout(()=>{
            navigate('/login')
        },2000)
        }else{
            fetch(`${import.meta.env.VITE_API_URL}/todo/update/${todo._id}`,{
                method:'PATCH',
                headers:{
                    'Content-type':'Application/json',
                    'Authorization':token
                  },
                body:JSON.stringify({
                   completed:true
                }) 
            }).then(async(res)=>{
                const data=await res.json();
                if(data.error){
                    console.log(data.error);
                    toast.error('something went wrong! Please try again later!');
                }else{
                    toast.success('todo completed!',{
                        autoClose:1000
                    })
                    refreshTodos();
                }
            })
        }
    }
    const handleUndo=(todo)=>{
        const token=localStorage.getItem('token');
        if(!token){
        toast.error('Something went wrong! Please login to try again')
        setTimeout(()=>{
            navigate('/login')
        },2000)
        }else{
            fetch(`${import.meta.env.VITE_API_URL}/todo/update/${todo._id}`,{
                method:'PATCH',
                headers:{
                    'Content-type':'Application/json',
                    'Authorization':token
                  },
                body:JSON.stringify({
                   completed:false
                }) 
            }).then(async(res)=>{
                const data=await res.json();
                if(data.error){
                    console.log(data.error);
                    toast.error('something went wrong! Please try again later!');
                }else{
                    toast.success('todo unmarked!',{
                        autoClose:1000
                    })
                    refreshTodos();
                }
            })
        }
    }
    const handleDelete=(todo)=>{
        const token=localStorage.getItem('token');
        if(!token){
        toast.error('Something went wrong! Please login to try again')
        setTimeout(()=>{
            navigate('/login')
        },2000)
        }else{
            fetch(`${import.meta.env.VITE_API_URL}/todo/delete/${todo._id}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'Application/json',
                    'Authorization':token
                  }
            }).then(async(res)=>{
                const data=await res.json();
                if(data.error){
                    console.log(data.error);
                    toast.error('something went wrong! Please try again later!');
                }else{
                    toast.info('todo deleted!',{
                        autoClose:1000
                    })
                    refreshTodos();
                }
            })
        }
    }
  return (
    <div className='min-h-screen bg-blue-200 dark:bg-zinc-700 transition-all duration-250'>
        <AppBar/>
        <ToastContainer/>
        <div className='flex p-5 flex-wrap justify-center gap-10'>
          {todos.length==0 && <div className='flex flex-col gap-4 mt-10'>
            <div className='px-5'>No todos here!</div>
            <Button onClick={()=>navigate('/create')} variant='outlined'>Create Now!</Button>
            </div>}
            {todos.map((todo)=>{
                return <Todo todo={todo} key={todo._id} handleDelete={handleDelete} handleDone={handleDone} handleUndo={handleUndo}/>
            })}
        </div>
   </div>
  )
}

export default ViewTodos
