//fetch api and axios
const axios =require("axios");

async function yo(){
    const response=await fetch("https://httpdump.app/dumps/437ace7f-cfa2-411a-aa9d-424c04fc7285",{
        method:"POST",
        headers:{
            "Authorization":"Bearer hello_from_fetch"
        },
        body:JSON.stringify({
            username:"Aayush",
            password:"123"
        })
    });
    // const json=await response.json();
    // console.log(json.todos);
}

//in axios we don't have to specify if we are returning json/text etc
//axios takes the link,body,headers(or sth else) as arguments in that order respectively
//*but in GET you cant send the body so it cant be in the argument just the link and rest like headers
async function yo2(){
    const response=await axios.post("https://httpdump.app/dumps/437ace7f-cfa2-411a-aa9d-424c04fc7285/bat",{
            username:"Aayush",
            password:"123"
    },{
        headers:{
            "Authorization":"Bearer hello_from_axios"
        }
    });
    console.log(response.data.todos)
}

//another way to send axios request
//here body is sent as data
async function yo3(){
    const response=await axios({
        method:"POST",
        url:"https://httpdump.app/dumps/437ace7f-cfa2-411a-aa9d-424c04fc7285",
        headers:{Authorization:"Bearer Hello_there!"},
        data:{
            username:"Aayush",
            password:"123"
        }
    })
    console.log(response.data.todos)
}

yo3();