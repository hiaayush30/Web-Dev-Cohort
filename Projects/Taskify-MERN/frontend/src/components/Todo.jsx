import { Button } from '@mui/material'

const Todo = ({ todo, handleDelete, handleDone, handleUndo }) => {
    return (
        <div className='m-3  max-h-[300px] max-w-[250px] bg-blue-100 dark:bg-zinc-800 dark:text-white flex rounded-lg flex-col justify-center shadow-lg hover:shadow-xl items-center hover:scale-110 transition-all'>
            <div className='pt-2 pl-2 pr-2'>{
                todo.completed ? <img className='rounded-[5px]' height={200} width={200} src='../../check.png' />
                    : <img className='rounded-[5px]' height={200} width={200} src='../../hourglass.png' />
            }</div>
            <div className='py-3'>
                {todo.completed ? <div className='text-green-600 text-[22px] font-semibold font-mono'>{todo.title}</div>
                    : <div className='text-[22px] font-semibold font-mono'>{todo.title}</div>}
                <div className='flex gap-3'>
                    {todo.completed ? <Button onClick={() => handleUndo(todo)} color='error' variant='contained'>Undo?</Button> :
                        <Button onClick={() => handleDone(todo)} size='small' variant='contained'>Done?</Button>}
                    <Button onClick={() => handleDelete(todo)} size='small' color='error' variant='outlined'>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default Todo
