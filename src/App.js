import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState,useEffect } from 'react';

import { CompressOutlined, Contacts, Filter } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setdata] = useState({
    nam:"",
    ema:"",

  })
  const [storage,setstorage] = useState(JSON.parse(localStorage.getItem("contacts"))||[])
  const[val,setval]=useState({})
  console.log(val)


  console.log(storage)
  const onInputchange=(e)=>{
    console.log("name=======>",e.target.name);
    console.log("value=======>",e.target.value);
    const name=e.target.name;
    const value=e.target.value
    setdata ({
      ...data,
      [name]:value
    })
    
     console.log("dataaaa===>",data)
     }



 const collectname=()=>{
  console.log(storage)
  setstorage([
  ...storage,
    {...data,id:uuidv4()}
  ])
  console.log(storage)

}

const editna=(chan)=>{
  
  setstorage([
  ...storage,
    {...chan}
  ])
  console.log(storage)

}

 const erase=(did)=>{
  console.log(did)
  const space=storage.filter((fil)=>{ 
   return fil.id!=did
  }) 
console.log(space)
setstorage(space)
  
}
 
const editdata=(dod)=>{
  console.log(dod)
  const edd=storage.filter((fit)=>{ 
    return fit.id==dod
   }) 
   console.log(edd)
   setval(edd[0])
   console.log(val);
}




useEffect(() => {
  localStorage.setItem("contacts",JSON.stringify(storage))
}, [storage])

 


  return (
   
      <div className='App'>
         <Form olddata={storage} collect={collectname} oninput={onInputchange} sval={val} era={erase} editnam={editna}/>
      <Table wdata={storage} era={erase} editd={editdata} />
     
        
      </div>
       );
}

export default App;
