const deleteDiv = () =>{
    const div = document.querySelector('div');
    // document.querySelector('body').removeChild(div);
    div.remove();
  }

  const addElement=()=>{
    const input=document.querySelector('input').value;
    const div=document.createElement('div');
    div.innerText=input;
    document.body.appendChild(div);
    document.querySelector('input').value='';
  }