import React from 'react'
import './form.css'
import { useState,useEffect } from 'react';
import { WindowSharp } from '@mui/icons-material';


export default function ({olddata,collect,oninput,sval,era,editnam}) {
  const [vval, setvval] = useState(sval)
  const [first, setfirst] = useState(false)
 

  const edddit=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(" ooo===>",vval)
    setvval ({
      ...sval,
      [name]:value
    })
    console.log(" sss===>",vval)


  }
  const clickedit=()=>{
    console.log(sval.id)
    era(sval.id)
     setfirst(true) 
   window.location.reload()
    }
    useEffect(() => {
      if(first===true){
        console.log(vval);
         editnam(vval)
          }
      
    }, [first])
    


useEffect(() => {
  
 setvval({...sval})
}, [sval])


 return (
    
    <div className='main'>
      {sval?.nam===undefined?
    <center>
    <div className='form1'>
       <h1 id='hed'> Contact Form</h1>
     <p id='hed' style={{color:'GrayText'}}>Enter your Credential </p><br/>
    <p><input className='name1' placeholder='Name' name='nam' onChange={oninput}></input></p> 
    <p> <input className='email1' placeholder='Email' name='ema' onChange={oninput} ></input></p>
     <button className='bttn' onClick={collect} > Send Message</button>
     </div>
      
 </center>:
 <center>
    <div className='form1'>
     
     <h1 id='hed'> Edit Form</h1><br/>
     <h5> </h5>
    <p><input className='name1' name='nam' value={vval.nam} onChange={edddit} ></input></p> 
    <p> <input className='email1'name='ema' value={vval.ema}    onChange={edddit}   ></input></p>
     <button className='bttn'  onClick={clickedit} > edit  Message</button>
    
      </div>
      
 </center>
}

 </div>
  )
}
