import React from 'react'
import './table.css'
import {AccountCircle} from '@mui/icons-material/';
import {BorderColor} from '@mui/icons-material/';
import {Delete} from '@mui/icons-material/';

export default function table({wdata,era,editd}) {
  console.log(wdata)

 

  return (
    <>
   
  
      {wdata.map((fdata)=>(
         <div className='container'>
     
      
        <div id='kkk1' ><p id='w'> <AccountCircle/> </p></div>
        <div id='kkk'  > <p id='w'>{fdata.nam}</p></div>
        <div id='kkk2' ><p id='w'> {fdata.ema} </p> </div>
        <div id='kkk1' onClick={()=>editd(fdata.id)} > <p id='w'><BorderColor/> </p></div>
        <div id='kkk1'   onClick={()=>era(fdata.id)}> <p id='w'><Delete/> </p></div>
        </div>
        
           ))} 
           </>

         
           
           
            
  )
}
