import React, { useState } from 'react'
import {TextField} from '@mui/material';

const CustomTextField = () => {
    const[text,setText]=useState('');
    const[text2,setText2]=useState('');
    const[text3,setText3]=useState('');
    const[text4,setText4]=useState('');

    const textHandler=(e)=>{
        let myText=e.target.value;
        setText(myText);
        let regex=/^[a-zA-Z]+$/;
        if(!regex.test(myText))
            alert("Enter only letters");
    }
    const textHandler2=(e)=>{
        let myText=e.target.value;
        setText2(myText);
        let regex=/^[a-zA-Z]+$/;
        if(!regex.test(myText))
            alert("Enter only letters");
    }
    const textHandler3=(e)=>{
        let myText=e.target.value;
        setText3(myText);
        let regex=/^[0-9]+$/;
        if(!regex.test(myText))
            alert("Enter only numbers");
    }
    const textHandler4=(e)=>{
        let myText=e.target.value;
        setText4(myText);
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(myText))
            alert("Enter valid email");
    }

  return (
    <div>
      <TextField type='text' value={text} variant='outlined' placeholder='Enter First Name' onChange={textHandler}/>
      <TextField type='text' value={text2} variant='outlined' placeholder='Enter Last Name' onChange={textHandler2}/>
      <TextField type='text' value={text3} variant='outlined' placeholder='Enter Contact Number' onChange={textHandler3}/>
      <TextField type='text' value={text4} variant='outlined' placeholder='Enter Your Email' onChange={textHandler4}/>
    </div>
  )
}

export default CustomTextField
