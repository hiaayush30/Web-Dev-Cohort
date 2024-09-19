//event-delegation- 1 event handler handling multiple events
//apply event-listener on parent and based on their ids,classes or tags
//delegate them different tasks

const parent=document.getElementById('parent');
//event bubbling
// parent.addEventListener('click',()=>{
//     console.log('works');
// })

parent.addEventListener('click',(details)=>{
    if(details.target.id==='play'){
        console.log('play song')
    }
    else if(details.target.id==='pause'){
        console.log('pause song')
    }
})


